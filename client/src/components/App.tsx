import React from 'react';
import styled from 'styled-components';
import Header from './header/Header.tsx';
import KnowsyHeader from './header/KnowsyHeader.tsx';
import PurchaseData from './feed/PurchaseData.tsx';
import NavigationPanel from './footer/NavigationPanel.tsx';
import PurchaseDummyData from '/Users/jennngai/knowsy/client/src/PurchaseDummyData.tsx';
import ProductSearchBar from './product-search/ProductSearchBar.tsx';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #243554;
`

const Box = styled.div`
  padding: 30px;
  width: 400px;
  border: #243554 solid 1px;
  border-radius: 15px;
  position: relative;
`

let Colors = {
  "NavyBlue": '#243554',
  "Magenta": '#ff6192',
  "LightGrey": '#c2c7d7',
  "DarkGrey": '#aeb1be',
  "lightBlue": '#eff1ff',
 }

const App: React.FC = () => {
  return (
    <Container>
      <Box>
        <KnowsyHeader />
        <Header />
        <ProductSearchBar placeholder="Find a Product..." purchaseData={PurchaseDummyData}/>
        <PurchaseData />
        <NavigationPanel />
      </Box>
    </Container>
  );
}

export default App;