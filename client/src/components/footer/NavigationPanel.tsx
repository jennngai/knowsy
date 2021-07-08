import React from 'react';
import Home from '../../../../icons/homeIconWhite.svg';
import Chat from '../../../../icons/messageIconWhite.svg';


import styled from 'styled-components';

const NavigationBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: #243554;
  padding: 10px;
  border: pink solid 1px;
  radius: 5px;
`
const NavigationIcon = styled.div`
  padding-left: 100px;
`


const NavigationPanel: React.FC = () => {
  return (
    <NavigationBar>
      <img src={Home} />
      <NavigationIcon><img src={Chat} /></NavigationIcon>
    </NavigationBar>

  );
}

export default NavigationPanel;