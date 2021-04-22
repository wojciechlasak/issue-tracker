import React from 'react';
import { PopupContainer, StyledPopup } from './StyledPopup';

const Popup = ({ children }) => {
  return (
    <PopupContainer>
      <StyledPopup>{children}</StyledPopup>
    </PopupContainer>
  );
};

export default Popup;
