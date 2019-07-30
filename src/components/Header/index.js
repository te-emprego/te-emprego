import React from 'react';
import MaterialIcon from 'material-icons-react';
import { Col } from '@components/Grid';
import logo from '@images/Logo.svg';
import right from '@images/fx.svg';

import {
  Logo,
  Wrapper,
  Container,
  Right,
  Menu,
  TopBar,
  MobileBar,
  Avatar,
  InfoUser,
  UserName,
} from './styles';

const Header = () => (
  <Wrapper>
    <Right src={right} />
    <Container>
      <Col xs={12} sm={10}>
        <MobileBar>
          <Avatar />
          <Menu>
            <MaterialIcon icon="menu" color="#673AB7" size={35} />
          </Menu>
        </MobileBar>

        <TopBar>
          <Logo src={logo} />
          <InfoUser>
            <UserName>User Name</UserName>
            <Avatar />
          </InfoUser>
        </TopBar>
      </Col>
    </Container>
  </Wrapper>
);

export default Header;
