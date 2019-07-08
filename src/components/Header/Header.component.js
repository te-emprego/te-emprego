import React from 'react';
import Container from '../Container';
import {
  Wrapper,
  Logo
} from './Header.style';

import logo from '../../images/Logo.svg';

const Header = () => (
  <Wrapper>
    <Container>
      <Logo src={logo}/>
    </Container>
  </Wrapper>
);

export default Header;