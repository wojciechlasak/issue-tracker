import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
`;

export const Container = styled.div`
  padding: 1.5em 0;
  border-top: 1px solid ${props => props.theme.colors.grayLight};
  display: flex;
`;

export const Box = styled.div`
  background-color: ${props => props.bgColor};
  padding: 1em 1.5em;
  border-radius: ${props => props.theme.details.borderRadius};
  width: 8em;
  text-align: center;
  margin: 0 0.75em;
  cursor: pointer;
  transition: opacity 0.5s;

  ${({ active }) =>
    !active &&
    `
    opacity: 60%;
  `}
`;

export const Text = styled.div`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
`;
