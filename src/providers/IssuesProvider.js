import React, { createContext, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import { ISSUES } from '../constants/data';

export const IssuesContext = createContext();

const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState(ISSUES);
  const [filteredIssues, setFilteredIssues] = useState(ISSUES);

  return (
    <IssuesContext.Provider
      value={{
        issues: issues,
        filteredIssues: filteredIssues,
        addIssues: newIssue => {
          newIssue.id = uuid4();
          setIssues(oldIssues => [...oldIssues, newIssue]);
        },
        updateIsssueStatus: (issueId, newStatus) => {
          const updateIndex = issues.findIndex(issue => issue.id === issueId);
          setIssues(prevIssues => {
            prevIssues[updateIndex].status = newStatus;
            return prevIssues;
          });
        },
        filterIssuesByStatus: status => {
          if (status === 'all') setFilteredIssues(issues);
          else
            setFilteredIssues(issues.filter(issue => issue.status === status));
        },
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

export default IssuesProvider;
