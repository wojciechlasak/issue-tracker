import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    blue: '#283D7B',
    pink: '#FF4A75',
    green: '#49a078',
    yellow: '#e09d00',
    gray: '#454852',
    grayLight: '#D3D5DA',
  },
  fontSizes: {
    small: '0.8em',
    medium: '1.2em',
    large: '2em',
  },
  spacing: {
    column: '3rem',
  },
  details: {
    borderRadius: '1em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
