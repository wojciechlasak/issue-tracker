import React from 'react';
import IssuesProvider from './providers/IssuesProvider';
import Theme from './providers/Theme';
import styled from 'styled-components';
import Header from './components/header/Header';
import IssuesList from './components/issuesList/IssuesList';

const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.column};
  color: ${props => props.theme.colors.gray};
`;

const App = () => {
  return (
    <IssuesProvider>
      <Theme>
        <Container>
          <Header />
          <IssuesList />
        </Container>
      </Theme>
    </IssuesProvider>
  );
};

export default App;
