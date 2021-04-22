import React, { useContext, useState, useEffect, useCallback } from 'react';
import { STATUS } from '../../constants/status';
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
        name: STATUS.OPEN,
        bgColor: getStatusColor(STATUS.OPEN),
        number: getIssueNumber(STATUS.OPEN),
      },
      {
        name: STATUS.PENDING,
        bgColor: getStatusColor(STATUS.PENDING),
        number: getIssueNumber(STATUS.PENDING),
      },
      {
        name: STATUS.CLOSED,
        bgColor: getStatusColor(STATUS.CLOSED),
        number: getIssueNumber(STATUS.CLOSED),
      },
    ]);
  }, [issuesContext, getIssueNumber]);

  const handleChangeActive = title => {
    setActive(title);
    issuesContext.setFilterByStatusName(title);
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
