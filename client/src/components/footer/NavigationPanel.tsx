import React from 'react';
import Home from '../../../../icons/homeIconWhite.svg';
import Chat from '../../../../icons/messageIconWhite.svg';
import Saved from '../../../../icons/pocketIconWhite28px.svg';


import styled from 'styled-components';

const NavigationBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: #243554;
  padding: 10px;
  border-radius: 15px;
`
const NavigationIcon = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`

const NavigationPanel: React.FC = () => {
  return (
    <NavigationBar>
      <NavigationIcon><img src={Home} /></NavigationIcon>
      <NavigationIcon><img src={Chat} /></NavigationIcon>
      <NavigationIcon><img src={Saved} /></NavigationIcon>
    </NavigationBar>

  );
}

export default NavigationPanel;