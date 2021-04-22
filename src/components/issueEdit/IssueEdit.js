import React, { useState, useContext } from 'react';
import { STATUS } from '../../constants/status';
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
  Button,
  CancelButton,
  Tooltip,
} from './StyledIssueEdit';
import Cross from '../../images/x.png';

const Issue = ({ issue, onExit }) => {
  const issuesContext = useContext(IssuesContext);
  const [isChangeStatus, setIsChangeStatus] = useState(false);
  const [chosenStatus, setChosenStatus] = useState(issue.status);
  const [shouldShowTooltip, setShouldShowTooltip] = useState(false);

  const handleChangeStatus = () => {
    issuesContext.updateIsssueStatus(issue.id, chosenStatus);
    setIsChangeStatus(false);
  };

  return (
    <>
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
          <Cell>Status:</Cell>
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
                  <Button onClick={() => setIsChangeStatus(true)}>
                    Change Status
                  </Button>
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
            <Button
              onClick={handleChangeStatus}
              onMouseLeave={() => setShouldShowTooltip(false)}
              onMouseEnter={() => setShouldShowTooltip(true)}
            >
              Save
            </Button>
            {shouldShowTooltip && (
              <Tooltip>This operation can not be undo.</Tooltip>
            )}
          </StatusContainerIn>
        )}
      </StatusContainer>
    </>
  );
};

export default Issue;
