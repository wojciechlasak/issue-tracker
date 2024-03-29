import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';
import { ISSUES } from '../constants/data';

export const IssuesContext = createContext();

const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState(ISSUES);
  const [filterByStatusName, setFilterByStatusName] = useState('all');
  const [filteredIssues, setFilteredIssues] = useState(ISSUES);

  useEffect(() => {
    if (filterByStatusName === 'all') setFilteredIssues(issues);
    else
      setFilteredIssues(
        issues.filter(issue => issue.status === filterByStatusName)
      );
  }, [issues, filterByStatusName]);

  return (
    <IssuesContext.Provider
      value={{
        issues: issues,
        filteredIssues: filteredIssues,
        setFilterByStatusName: title => {
          setFilterByStatusName(title);
        },
        addIssues: newIssue => {
          newIssue.id = uuid4();
          setIssues([...issues, newIssue]);
        },
        updateIsssueStatus: (issueId, newStatus) => {
          const updateIndex = issues.findIndex(issue => issue.id === issueId);
          const newIssues = [...issues];
          newIssues[updateIndex].status = newStatus;
          setIssues([...newIssues]);
        },
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

export default IssuesProvider;
