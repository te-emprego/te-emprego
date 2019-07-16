import React from 'react';

import logo from '@images/Logo.svg';

import { Container, Logo, Wrapper } from './styles';

const Header = () => (
  <Wrapper>
    <Container>
      <Logo src={logo} />
    </Container>
  </Wrapper>
);

export default Header;
