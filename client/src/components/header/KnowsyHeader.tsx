import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  font-family: 'Merienda One', cursive;
  color: #ff6192;
  font-size: 3em;
  padding: 5px;
`

const KnowsyHeader: React.FC = () => {
  return (
    <Header>
     Knowsy
    </Header>
  );
}

export default KnowsyHeader;