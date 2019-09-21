import React, { useState } from 'react';
import MaterialIcon from 'material-icons-react';
import styled from 'styled-components';

import fxTop from '@assets/images/fx_top.svg';
import fx from '@assets/images/fx.svg';
import fxBottom from '@assets/images/fx_bot.svg';

import Sidebar from '@components/Sidebar/content';
import { Overlay } from '@components/Overlay';

import { Wrapper, Texture, Content, MobileMenu } from './style';

const handleClick = () => {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    alert('');
  }
};

const MobileMenuTrigger = ({ onClick }) => (
  <MaterialIcon onClick={onClick} icon="menu" size={35} color="#673ab7" />
);

const Trigger = styled.div`
  width: 120px;
  height: 110px;
  position: absolute;
  left: -118px;
  top: 0;
  z-index: 3;

  background-image: url(${fx});
  background-size: 100% 100%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 10px 20px;
`;

// eslint-disable-next-line react/prop-types
const AppView = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <Wrapper>
      <MobileMenu active={sidebar}>
        <Trigger>
          <span onClick={() => setSidebar(!sidebar)}>
            <MobileMenuTrigger />
          </span>
        </Trigger>
        <Sidebar />
      </MobileMenu>
      <img
        onDragStart={e => e.preventDefault()}
        className="fx_top"
        src={fxTop}
        alt="top fx"
        onClick={handleClick}
      />
      <Texture />
      <Content>{children}</Content>
      <img
        onDragStart={e => e.preventDefault()}
        className="fx_bottom"
        src={fxBottom}
        alt="bottom fx"
      />
      <span onClick={() => setSidebar(!sidebar)}>
        <Overlay isActive={sidebar} />
      </span>
    </Wrapper>
  );
};

export { AppView };
export default AppView;
