import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.blueDimmed};
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPopup = styled.div`
  position: fixed;
  max-width: 50em;
  background-color: #fff;
  padding: 1.5em 2em;
  margin: ${props => props.theme.spacing.column};
  border-radius: ${props => props.theme.details.borderRadius};
`;
