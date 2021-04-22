import styled from 'styled-components';

export const Cell = styled.div`
  width: ${props => props.width || '18%'};
  color: ${props => props.color || props.theme.colors.blue};
  text-align: center;
  font-weight: 700;
`;

export const SortCell = styled(Cell)`
  cursor: pointer;
  user-select: none;

  img {
    margin-left: 0.25em;
    height: 1em;
    vertical-align: middle;
    ${({ sorted }) =>
      sorted === 'ascending' &&
      `
    transform: rotate(180deg);`}
  }
`;

export const ListHeader = styled.header`
  display: flex;
  font-size: ${props => props.theme.fontSizes.medium};
  text-transform: uppercase;
  border-top: 1px solid ${props => props.theme.colors.grayLight};
  padding: 1em 0;
`;
