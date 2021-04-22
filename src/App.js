import React from 'react';
import IssuesProvider from './providers/IssuesProvider';
import styled from 'styled-components';

const Container = styled.div``;

const App = () => {
  return (
    <IssuesProvider>
      <Container>Hello</Container>
    </IssuesProvider>
  );
};

export default App;
