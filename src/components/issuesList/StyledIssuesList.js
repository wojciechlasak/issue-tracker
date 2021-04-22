import styled from 'styled-components';

export const PopupContainer = styled.div`
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

export const Popup = styled.div`
  position: fixed;
  max-width: 50em;
  background-color: #fff;
  padding: 1.5em;
  margin: ${props => props.theme.spacing.column};
`;

export const Cell = styled.div`
  width: ${props => props.width || '18%'};
  color: ${props => props.color || props.theme.colors.gray};
  text-align: center;
`;

export const SortCell = styled(Cell)`
  cursor: pointer;

  img {
    margin-left: 0.25em;
    height: 1em;
    vertical-align: middle;
  }
`;

export const ListHeader = styled.header`
  display: flex;
  font-size: ${props => props.theme.fontSizes.medium};
  text-transform: uppercase;
  border-top: 1px solid ${props => props.theme.colors.grayLight};
  padding: 1em 0;
`;
