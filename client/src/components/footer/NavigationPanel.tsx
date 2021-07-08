import React from 'react';
import Home from '/Users/jennngai/knowsy/icons/homeIconWhite.svg';
import Chat from '/Users/jennngai/knowsy/icons/messageIconWhite.svg';
import styled from 'styled-components';

const NavigationBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: #243554;
  padding: 10px;
  border: pink solid 1px;
  radius: 5px;
`

const NavigationPanel: React.FC = () => {
  return (
    <NavigationBar>
    <img src={Home} />
    <img src={Chat} />
    </NavigationBar>

  );
}

export default NavigationPanel;