import React, { useContext, useState } from 'react';
import { IssuesContext } from '../../providers/IssuesProvider';
import Issue from '../issue/Issue';
import IssueEdit from '../issueEdit/IssueEdit';
import Arrow from '../../images/arrow.png';
import {
  ListHeader,
  Cell,
  SortCell,
  PopupContainer,
  Popup,
} from './StyledIssuesList';

const IssuesList = () => {
  const issuesContext = useContext(IssuesContext);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [activeIssue, setActiveIssue] = useState(null);
  const [issues, setIssues] = useState(issuesContext.issues);

  const handleClickIssue = issue => {
    setIsShowPopup(true);
    setActiveIssue(issue);
  };

  const handleExitIssueEdit = () => {
    setIsShowPopup(false);
    setActiveIssue(null);
  };

  const handleSort = () => {
    setIssues(prevIssues => [
      ...prevIssues.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      ),
    ]);
  };

  return (
    <section>
      <ListHeader>
        <SortCell onClick={handleSort}>
          Title <img src={Arrow} alt="" />
        </SortCell>
        <SortCell onClick={handleSort}>
          Date <img src={Arrow} alt="" />
        </SortCell>
        <Cell width="36%">Description</Cell>
        <SortCell onClick={handleSort}>
          Status <img src={Arrow} alt="" />
        </SortCell>
      </ListHeader>
      {issues.map(issue => (
        <Issue key={issue.id} issue={issue} onClickIssue={handleClickIssue} />
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
