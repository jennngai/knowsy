import React from 'react';
import styled from 'styled-components';
import SavedSmallIcon from '/Users/jennngai/knowsy/icons/pocketIconNavyBlue20px.svg';
import MessageSmallIcon from '/Users/jennngai/knowsy/icons/messageIconNavyBlue20px.svg';

const PurchaseDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: pink solid 1px;
  z-index: 1;

  &:hover {
    background-color: #eff1ff;
  }
`

const ChildImageBox = styled.div`
  flex: 1;
  flex-wrap: nowrap;
`

const ChildProductBox = styled.div`
  flex: 5;
  flex-wrap: nowrap;
`

const ProductThumbnail = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  padding: 5%;
  margin: 10%;
  width: 60px;
  height: 60px;
  border: 1px solid pink;
  border-radius: 50px;
  position: relative;
  z-index: 1;
`;

const ProductName = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`
const PurchaseInfo = styled.div`
  font-size: 0.75em;
  margin: 1em;
  color: #c2c7d7;
`
const ProductIconBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  padding-bottom: 1em;
`
const ProductIcon = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`

const PurchaseDetails: React.FC = (props) => {
    let purchases = props.purchaseData.map((purchase) => {
      let { product_name, product_image, purchase_date, purchaser_name, vendor } = purchase;
      return <div><PurchaseDetailsContainer>
        <ChildImageBox>
          <ProductThumbnail src={product_image} />
        </ChildImageBox>
        <ChildProductBox>
          <ProductName>
            {product_name}
            <PurchaseInfo>{purchaser_name} purchased this on {purchase_date} from {vendor}!
            </PurchaseInfo>
          </ProductName>
        </ChildProductBox>
      </PurchaseDetailsContainer>
      <ProductIconBar>
        <ProductIcon><img src={SavedSmallIcon} /></ProductIcon>
        <ProductIcon><img src={MessageSmallIcon} /></ProductIcon>
      </ProductIconBar>
      </div>

    })
  return (
    <>
     { purchases }
    </>
  );
}

export default PurchaseDetails;