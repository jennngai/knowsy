import React from 'react';
import styled from 'styled-components';

const PurchaseDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border: pink solid 1px;
`

const ProductName = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`
const PurchaseInfo = styled.div`
  font-size: 12px;
  margin: 1em;
  padding: 0.25em 1em;
`

const PurchaseDetails: React.FC = (props) => {
    let purchases = props.purchaseData.map((purchase) => {
      let { product_name, purchase_date, purchaser_name, vendor } = purchase;
      return <PurchaseDetailsContainer>
        <ProductName>
        {product_name}
          <PurchaseInfo>{purchaser_name} purchased this on {purchase_date} from {vendor}!
          </PurchaseInfo>
        </ProductName>
      </PurchaseDetailsContainer>
    })
  return (
    <>
     { purchases }
    </>
  );
}

export default PurchaseDetails;