import React from 'react';
import styled from 'styled-components';
import { getDate } from '../../utils/getDate';

const Issue = ({ issue, onExit }) => {
  return (
    <>
      <div>
        {issue.title} {getDate(issue.created_date)}
      </div>
      <div>{issue.description}</div>
    </>
  );
};

export default Issue;
