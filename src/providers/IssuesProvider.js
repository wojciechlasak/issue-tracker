import React, { createContext, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import { ISSUES } from '../constants/data';

export const IssuesContext = createContext();

const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState(ISSUES);

  return (
    <IssuesContext.Provider
      value={{
        issues: issues,
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
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

export default IssuesProvider;
