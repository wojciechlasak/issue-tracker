import React from 'react';
import styled from 'styled-components';
import { getDate } from '../../utils/getDate';

const Container = styled.div`
  display: flex;
  padding: 2em 0;
  border-bottom: 1px solid ${props => props.theme.colors.grayLight};
  transition: box-shadow 1s;

  &:hover {
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.17);
  }
`;

const Cell = styled.div`
  padding: 0 1rem;
  width: ${props => props.width || '18%'};
  color: ${props => props.color || props.theme.colors.gray};
  text-align: center;
`;

const TextCell = styled(Cell)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const EditCell = styled(Cell)`
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.medium};
`;

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
