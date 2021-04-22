import React, {
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { IssuesContext } from '../../providers/IssuesProvider';
import { AddButton, InputText, InputTextArea, Label } from './StyledIssueAdd';
import Popup from '../popup/Popup';
import { getStatusColor } from '../../utils/getStatusColor';
import {
  Exit,
  Heading,
  StatusContainer,
  StatusContainerIn,
  Cell,
  StatusButton,
  HoverableButton,
  CancelButton,
} from '../issueEdit/StyledIssueEdit';
import Cross from '../../images/x.png';

const IssueAdd = () => {
  const issuesContext = useContext(IssuesContext);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [chosenStatus, setChosenStatus] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const node = useRef();

  const handleClickOutside = useCallback(e => {
    if (node.current.contains(e.target)) return;
    handleReset();
  }, []);

  const handleIssueAdd = () => {
    issuesContext.addIssues({
      title: title,
      description: desc,
      created_date: new Date(),
      status: chosenStatus,
    });
    handleReset();
  };

  const handleReset = () => {
    setIsShowPopup(false);
    setChosenStatus(null);
    setTitle('');
    setDesc('');
  };

  useEffect(() => {
    if (isShowPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShowPopup, handleClickOutside]);

  useEffect(() => {
    if (isShowPopup) node.current.focus();
  }, [isShowPopup]);

  return (
    <>
      <AddButton onClick={() => setIsShowPopup(true)}>
        <span>+</span>
      </AddButton>
      {isShowPopup && (
        <Popup>
          <div ref={node}>
            <Exit onClick={handleReset}>
              <img src={Cross} alt="" />
            </Exit>
            <Heading>Add Details</Heading>
            <Label>
              Title
              <InputText
                value={title}
                type="text"
                name="title"
                onChange={e => setTitle(e.target.value)}
              />
            </Label>
            <Label>
              Description
              <InputTextArea
                value={desc}
                type="text"
                name="message"
                onChange={e => setDesc(e.target.value)}
              />
            </Label>
            <StatusContainer>
              <StatusContainerIn>
                <Cell>Choose Status:</Cell>
                <StatusButton
                  color={getStatusColor('open')}
                  active={'open' === chosenStatus}
                  onClick={() => setChosenStatus('open')}
                >
                  open
                </StatusButton>
                <StatusButton
                  color={getStatusColor('pending')}
                  active={'pending' === chosenStatus}
                  onClick={() => setChosenStatus('pending')}
                >
                  pending
                </StatusButton>
                <StatusButton
                  color={getStatusColor('closed')}
                  active={'closed' === chosenStatus}
                  onClick={() => setChosenStatus('closed')}
                >
                  closed
                </StatusButton>
              </StatusContainerIn>
              <StatusContainerIn>
                <CancelButton onClick={handleReset}>Cancel</CancelButton>
                <HoverableButton
                  disabled={
                    title === '' || desc === '' || chosenStatus === null
                  }
                  onClick={handleIssueAdd}
                >
                  Save
                </HoverableButton>
              </StatusContainerIn>
            </StatusContainer>
          </div>
        </Popup>
      )}
    </>
  );
};

export default IssueAdd;
