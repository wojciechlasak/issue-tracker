import React, { useContext, useState, useEffect, useCallback } from 'react';
import FilterBox from './FilterBox';
import { IssuesContext } from '../../providers/IssuesProvider';
import { getStatusColor } from '../../utils/getStatusColor';
import { Heading, Container } from './StyledHeader';

const Header = () => {
  const issuesContext = useContext(IssuesContext);
  const [active, setActive] = useState('all');
  const [filters, setFilters] = useState([]);

  const getIssueNumber = useCallback(
    status => {
      return issuesContext.issues.filter(issue => issue.status === status)
        .length;
    },
    [issuesContext]
  );

  useEffect(() => {
    setFilters([
      {
        name: 'all',
        bgColor: '#283D7B',
        number: issuesContext.issues.length,
      },
      {
        name: 'open',
        bgColor: getStatusColor('open'),
        number: getIssueNumber('open'),
      },
      {
        name: 'pending',
        bgColor: getStatusColor('pending'),
        number: getIssueNumber('pending'),
      },
      {
        name: 'closed',
        bgColor: getStatusColor('closed'),
        number: getIssueNumber('closed'),
      },
    ]);
  }, [issuesContext, getIssueNumber]);

  const handleChangeActive = title => {
    setActive(title);
    issuesContext.filterIssuesByStatus(title);
  };

  return (
    <React.Fragment>
      <Heading>Issues Tracker</Heading>
      <Container>
        {filters.map(filter => (
          <FilterBox
            key={filter.name}
            title={filter.name}
            number={filter.number}
            bgColor={filter.bgColor}
            active={active}
            changeActive={handleChangeActive}
          />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default Header;
