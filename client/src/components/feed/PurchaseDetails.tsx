import React from 'react';
import styled from 'styled-components';
import Dribble from '/Users/jennngai/knowsy/icons/dribbbleIconNavyBlue.svg';

const PurchaseDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: pink solid 1px;
`

const ChildImageBox = styled.div`
  flex: 1;
  flex-wrap: nowrap;
`

const ChildProductBox = styled.div`
  flex: 5;
  flex-wrap: nowrap;
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
  color: #c2c7d7;
`

const PurchaseDetails: React.FC = (props) => {
    let purchases = props.purchaseData.map((purchase) => {
      let { product_name, product_image, purchase_date, purchaser_name, vendor } = purchase;
      return <PurchaseDetailsContainer>
        <ChildImageBox>
          <img src={Dribble} />
        </ChildImageBox>
        <ChildProductBox>
          <ProductName>
          {product_name}
            <PurchaseInfo>{purchaser_name} purchased this on {purchase_date} from {vendor}!
            </PurchaseInfo>
          </ProductName>
        </ChildProductBox>
      </PurchaseDetailsContainer>
    })
  return (
    <>
     { purchases }
    </>
  );
}

export default PurchaseDetails;