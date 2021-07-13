import styled from 'styled-components';

export const SearchOuterContainer = styled.div`
  display: flex;
`

export const Search = styled.div`
  border: #243554 1px solid;
  border-radius: 30px;
  font-size: 18px;
  padding: 15px;
  height: 20px;
  width: 300px;
`

export const SearchInput = styled.input`
  border: none;
  padding: 10px;
  height: 10px;
  width: 300px;
  font-color: #243554;
`

export const DataResult = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
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



