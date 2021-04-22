import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { IssuesContext } from '../../providers/IssuesProvider';
import Issue from '../issue/Issue';
import IssueEdit from '../issueEdit/IssueEdit';

const PopupContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(40, 61, 123, 0.5);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popup = styled.div`
  position: fixed;
  max-width: 50em;
  background-color: #fff;
  padding: 1.5em;
  margin: ${props => props.theme.spacing.column};
`;

const IssuesList = () => {
  const issuesContext = useContext(IssuesContext);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [activeIssue, setActiveIssue] = useState(null);

  const handleClickIssue = issue => {
    setIsShowPopup(true);
    setActiveIssue(issue);
  };

  const handleExitIssueEdit = () => {
    setIsShowPopup(false);
    setActiveIssue(null);
  };

  return (
    <section>
      <header></header>
      {issuesContext.issues.map(issue => (
        <Issue issue={issue} onClickIssue={handleClickIssue} />
      ))}
      {isShowPopup && (
        <PopupContainer>
          <Popup>
            <IssueEdit issue={activeIssue} onExit={handleExitIssueEdit} />
          </Popup>
        </PopupContainer>
      )}
    </section>
  );
};

export default IssuesList;
