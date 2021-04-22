import React from 'react';
import styled from 'styled-components';
import { getDate } from '../../utils/getDate';

import { Container, TextCell, EditCell } from './StyledIssue';

const Issue = ({ issue, onClickIssue }) => {
  return (
    <Container>
      <TextCell>{issue.title}</TextCell>
      <TextCell>{getDate(issue.created_date)}</TextCell>
      <TextCell width="36%">{issue.description}</TextCell>
      <TextCell>{issue.status}</TextCell>
      <EditCell width="10%" onClick={() => onClickIssue(issue)}>
        ...
      </EditCell>
    </Container>
  );
};

export default Issue;
