import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 2em 0;
  border-bottom: 1px solid ${props => props.theme.colors.grayLight};
  transition: box-shadow 1s;

  &:hover {
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.17);
  }
`;

export const Cell = styled.div`
  padding: 0 1rem;
  width: ${props => props.width || '18%'};
  color: ${props => props.color || props.theme.colors.gray};
  text-align: center;
`;

export const TextCell = styled(Cell)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const EditCell = styled(Cell)`
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.medium};
`;
