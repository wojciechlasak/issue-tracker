import React from 'react';
import { Box, Text } from './StyledHeader';

const FilterBox = ({ title, number, bgColor, active, changeActive }) => {
  return (
    <Box
      bgColor={bgColor}
      active={active === title}
      onClick={() => changeActive(title)}
    >
      <Text>{title}</Text>
      <Text>{number}</Text>
    </Box>
  );
};

export default FilterBox;
