import React from 'react';
import styled from 'styled-components';
import Header from './header/Header.tsx';
import PurchaseDetails from './feed/PurchaseDetails.tsx';
import NavigationPanel from './footer/NavigationPanel.tsx';


const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Box = styled.div`
  height: 100px;
  width: 200px;
  background: #b5bbc7;
  padding: 50px;
  font-family:'Roboto',sans-serif;
  position: relative;
  text-align: center;
`

const App: React.FC = () => {
  return (
    <Container>
      <Box>
        <Header />
      </Box>
    </Container>
  );
}

export default App;