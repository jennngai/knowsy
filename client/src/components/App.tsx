import React from 'react';
import styled from 'styled-components';
//import '../../client/dist/fonts.css';
import Header from './header/Header.tsx';
import KnowsyHeader from './header/KnowsyHeader.tsx';
import PurchaseData from './feed/PurchaseData.tsx';
import PurchaseDetails from './feed/PurchaseDetails.tsx';
import NavigationPanel from './footer/NavigationPanel.tsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: green solid 1px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #243554;
`

const Box = styled.div`
  padding: 30px;
  width: 400px;
  border: blue solid 1px;
  position: relative;
`

let Colors = {
  "NavyBlue": '#243554',
  "Magenta": '#ff6192',
  "LightGrey": '#c2c7d7',
  "DarkGrey": '#aeb1be'
 }

const App: React.FC = () => {
  return (
    <Container>
      <Box>
        <KnowsyHeader />
        <Header />
        <PurchaseData />
        <NavigationPanel />
      </Box>
    </Container>
  );
}

export default App;