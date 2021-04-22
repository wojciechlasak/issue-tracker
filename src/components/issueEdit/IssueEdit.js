import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { getDate } from '../../utils/getDate';
import { getStatusColor } from '../../utils/getStatusColor';
import { IssuesContext } from '../../providers/IssuesProvider';
import {
  Exit,
  Heading,
  TextContainer,
  Title,
  StatusContainer,
  StatusContainerIn,
  Cell,
  StatusCell,
  StatusButton,
  HoverableButton,
  CancelButton,
  Information,
} from './StyledIssueEdit';
import Cross from '../../images/x.png';

const IssueEdit = ({ issue, onExit }) => {
  const issuesContext = useContext(IssuesContext);
  const [isChangeStatus, setIsChangeStatus] = useState(false);
  const [chosenStatus, setChosenStatus] = useState(issue.status);
  const node = useRef();

  const handleChangeStatus = () => {
    issuesContext.updateIsssueStatus(issue.id, chosenStatus);
    setIsChangeStatus(false);
  };

  const handleClickOutside = useCallback(
    e => {
      if (node.current.contains(e.target)) return;
      onExit();
    },
    [onExit]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div ref={node}>
      <Exit onClick={onExit}>
        <img src={Cross} alt="" />
      </Exit>
      <Heading>Issue Details</Heading>
      <TextContainer>
        <Title>{issue.title}</Title>
        {getDate(issue.created_date)}
      </TextContainer>
      <TextContainer border={true}>{issue.description}</TextContainer>
      <StatusContainer>
        <StatusContainerIn>
          <Cell>{isChangeStatus ? 'Update Status:' : 'Status:'}</Cell>
          {isChangeStatus ? (
            <>
              <StatusButton
                color={getStatusColor('open')}
                active={'open' === chosenStatus}
                disabled={issue.status !== 'open'}
                onClick={() => setChosenStatus('open')}
              >
                open
              </StatusButton>
              <StatusButton
                color={getStatusColor('pending')}
                active={'pending' === chosenStatus}
                disabled={issue.status === 'closed'}
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
            </>
          ) : (
            <>
              <StatusCell color={getStatusColor(issue.status)}>
                {issue.status}
              </StatusCell>
              <Cell>
                {issue.status !== 'closed' && (
                  <HoverableButton onClick={() => setIsChangeStatus(true)}>
                    Change Status
                  </HoverableButton>
                )}
              </Cell>
            </>
          )}
        </StatusContainerIn>
        {isChangeStatus && (
          <StatusContainerIn>
            <CancelButton
              onClick={() => {
                setIsChangeStatus(false);
                setChosenStatus(issue.status);
              }}
            >
              Cancel
            </CancelButton>
            <HoverableButton onClick={handleChangeStatus}>Save</HoverableButton>
            <Information>Be careful, save cannot be undone</Information>
          </StatusContainerIn>
        )}
      </StatusContainer>
    </div>
  );
};

export default IssueEdit;
