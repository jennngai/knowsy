import React, { useState } from 'react';
import {
  SearchOuterContainer,
  SearchInput,
  Search,
  DataResult,
  DataItem
} from './ProductSearchBarStyles.tsx';
import CloseIcon from '/Users/jennngai/knowsy/icons/closeIconNavyBlue20px.svg';
import SearchIcon from '/Users/jennngai/knowsy/icons/searchIconNavyBlue20px.svg';

const ProductSearchBar: React.FC = ({ placeholder, purchaseData }) => {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log('event.target.value', event.target.value);
    setWordEntered(searchWord);
    const newFilter = purchaseData.filter((value) => {
      return value.product_name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    console.log('filteredData', filteredData);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  return (
    <Search>
      <SearchOuterContainer>
        <SearchInput
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
        />
        {filteredData.length === 0 ? (<img src={SearchIcon}/>) : (<img src={CloseIcon} onClick={clearInput}/>)}
      </SearchOuterContainer>
        {filteredData.length !== 0 && (
          <DataResult>
            {filteredData.slice(0, ).map((value, key) => {
              return (
                <DataItem>
                  <p>{value.product_name}</p>
                </DataItem>
              )
            })}
          </DataResult>
        )}
    </Search>
  );
}

export default ProductSearchBar;