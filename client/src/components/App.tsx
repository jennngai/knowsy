import React from 'react';
import styled from 'styled-components';
//import '../../client/dist/fonts.css';
import Header from './header/Header.tsx';
import PurchaseData from './feed/PurchaseData.tsx';
import PurchaseDetails from './feed/PurchaseDetails.tsx';
import NavigationPanel from './footer/NavigationPanel.tsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: green solid 1px;
`

const Box = styled.div`
  padding: 50px;
  width: 300px;
  border: blue solid 1px;
  font-family:'Arial';
  color: #243554;
  position: relative;
  text-align: center;
`

const App: React.FC = () => {
  return (
    <Container>
      <Box>
        <Header />
        <PurchaseData />
        <NavigationPanel />
      </Box>
    </Container>
  );
}

export default App;