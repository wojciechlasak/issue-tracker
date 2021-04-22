import styled from 'styled-components';

export const Exit = styled.div`
  position: absolute;
  top: 1.5em;
  right: 1em;
  width: 1.5em;
  height: 1.5em;
  background-color: ${props => props.theme.colors.grayLight};
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.colors.pink};
  }

  img {
    width: 0.75em;
  }
`;

export const Heading = styled.div`
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.medium};
  margin-bottom: 1.5em;
`;

export const Title = styled.span`
  font-weight: 700;
  margin-right: 2em;
`;

export const TextContainer = styled.div`
  padding-bottom: 1em;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5em 0;
  border-top: 1px solid ${props => props.theme.colors.grayLight};
  border-bottom: 1px solid ${props => props.theme.colors.grayLight};
`;

export const Cell = styled.div`
  color: ${props => props.color || props.theme.colors.gray};
  width: 33.3333%;
  padding: 0 0.5em;
  text-align: center;
`;
export const Button = styled.button`
  color: #fff;
  font-family: inherit;
  border-radius: ${props => props.theme.details.borderRadius};
  background-color: ${props => props.theme.colors.blue};
  border: none;
  padding: 0.75em 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors.blueDimmed};
  }
`;
