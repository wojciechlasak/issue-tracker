import React from 'react';
import { getDate } from '../../utils/getDate';
import { getStatusColor } from '../../utils/getStatusColor';

import { Container, TextCell, EditCell, StatusCell } from './StyledIssue';

const Issue = ({ issue, onClickIssue }) => {
  return (
    <Container>
      <TextCell>{issue.title}</TextCell>
      <TextCell>{getDate(issue.created_date)}</TextCell>
      <TextCell width="36%">{issue.description}</TextCell>
      <StatusCell color={getStatusColor(issue.status)}>
        {issue.status}
      </StatusCell>
      <EditCell width="10%" onClick={() => onClickIssue(issue)}>
        ...
      </EditCell>
    </Container>
  );
};

export default Issue;
