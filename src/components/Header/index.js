import React from 'react';
import { Container, Wrapper, Logo } from './styles';

import logo from '../../assets/images/Logo.svg';

const Header = () => (
  <Wrapper>
    <Container>
      <Logo src={logo} />
    </Container>
  </Wrapper>
);

export default Header;
