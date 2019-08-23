import React from 'react';

import { Container } from '@sdk/grid';

import logo from '@assets/images/Logo.svg';

import { Logo, Wrapper } from './styles';

const Header = () => (
  <Wrapper>
    <Container>
      <Logo src={logo} />
    </Container>
  </Wrapper>
);

export { Header };
export default Header;
