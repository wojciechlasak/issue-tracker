import React, { useContext, useState } from 'react';
import { IssuesContext } from '../../providers/IssuesProvider';
import { useSortableData } from '../../utils/useSortableData';
import Issue from '../issue/Issue';
import IssueEdit from '../issueEdit/IssueEdit';
import Popup from '../popup/Popup';
import Arrow from '../../images/arrow.png';
import { ListHeader, Cell, SortCell } from './StyledIssuesList';

const IssuesList = () => {
  const issuesContext = useContext(IssuesContext);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [activeIssue, setActiveIssue] = useState(null);
  const { items, requestSort, sortConfig } = useSortableData(
    issuesContext.filteredIssues
  );

  const getClassNamesFor = name => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

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
      <ListHeader>
        <SortCell
          onClick={() => requestSort('title')}
          sorted={getClassNamesFor('title')}
        >
          Title <img src={Arrow} alt="" />
        </SortCell>
        <SortCell
          onClick={() => requestSort('created_date')}
          sorted={getClassNamesFor('created_date')}
        >
          Date <img src={Arrow} alt="" />
        </SortCell>
        <Cell width="36%">Description</Cell>
        <Cell>Status</Cell>
      </ListHeader>
      {items.map(issue => (
        <Issue key={issue.id} issue={issue} onClickIssue={handleClickIssue} />
      ))}
      {isShowPopup && (
        <Popup>
          <IssueEdit issue={activeIssue} onExit={handleExitIssueEdit} />
        </Popup>
      )}
    </section>
  );
};

export default IssuesList;
