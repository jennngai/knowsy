import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PurchaseDetails from './PurchaseDetails.tsx';

const PurchaseData: React.FC = () => {
  const [isError, setIsError] = useState(false);
  const [purchases, setPurchases] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get(`/purchases`);
        setPurchases(results.data);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <>
     <PurchaseDetails
      purchaseData={purchases}
    />
    </>
  );
}

export default PurchaseData;