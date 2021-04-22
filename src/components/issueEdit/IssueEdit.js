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
  Cell,
  Button,
} from './StyledIssueEdit';
import Cross from '../../images/x.png';

const Issue = ({ issue, onExit }) => {
  const issuesContext = useContext(IssuesContext);
  const [isChangeStatus, setIsChangeStatus] = useState(false);

  const handleChangeStatus = () => {
    issuesContext.updateIsssueStatus(issue.id, STATUS.CLOSED);
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
        <Cell>Status:</Cell>
        <Cell color={getStatusColor(issue.status)}>{issue.status}</Cell>
        <Cell>
          <Button onClick={() => setIsChangeStatus(true)}>Zmień status</Button>
        </Cell>
      </StatusContainer>
      {isChangeStatus && <Button onClick={handleChangeStatus}>Zapis</Button>}
    </>
  );
};

export default Issue;
