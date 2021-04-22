import React, { useContext, useState } from 'react';
import FilterBox from './FilterBox';
import { IssuesContext } from '../../providers/IssuesProvider';
import { getStatusColor } from '../../utils/getStatusColor';
import { Heading, Container } from './StyledHeader';

const Header = () => {
  const issuesContext = useContext(IssuesContext);
  const [active, setActive] = useState('all');

  const getIssueNumber = status => {
    return issuesContext.issues.filter(issue => issue.status === status).length;
  };

  const handleChangeActive = title => {
    setActive(title);
    issuesContext.filterIssuesByStatus(title);
  };

  return (
    <React.Fragment>
      <Heading>Issues Tracker</Heading>
      <Container>
        <FilterBox
          title="all"
          number={issuesContext.issues.length}
          bgColor={'#283D7B'}
          active={active}
          changeActive={handleChangeActive}
        />
        <FilterBox
          title="open"
          number={getIssueNumber('open')}
          bgColor={getStatusColor('open')}
          active={active}
          changeActive={handleChangeActive}
        />
        <FilterBox
          title="pending"
          number={getIssueNumber('pending')}
          bgColor={getStatusColor('pending')}
          active={active}
          changeActive={handleChangeActive}
        />
        <FilterBox
          title="closed"
          number={getIssueNumber('closed')}
          bgColor={getStatusColor('closed')}
          active={active}
          changeActive={handleChangeActive}
        />
      </Container>
    </React.Fragment>
  );
};

export default Header;
