import styled from 'styled-components';

export const SearchOuterContainer = styled.div`
  display: flex;
`

export const Search = styled.div`
  border: #243554 1px solid;
  border-radius: 20px;
  font-size: 18px;
  padding: 15px;
  height: 20px;
  width: 300px;
`

export const SearchInput = styled.input`
  border: none;
  padding: 15px;
  height: 20px;
  width: 300px;
`

export const DataResult = styled.div`
  margin-top: 5px;
  width: 300px;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 3;
`

export const DataItem = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: #243554;
  z-index: 3;

`



