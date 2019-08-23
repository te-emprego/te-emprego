import styled from 'styled-components';

import texture from '@assets/images/bg_texture.png';

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const Wrapper = styled.div`
  background-image: linear-gradient(to right top, #673ab7, #8f54f8);
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;

  .fx_top {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    user-select: none;

    @media screen and (max-width: 990px) {
      display: none;
    }
  }

  .fx_bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    user-select: none;
  }
`;

const Texture = styled.div`
  width: 100%;
  min-height: 100%;
  position: fixed;
  z-index: 0;

  background-image: url(${texture});
  background-repeat: repeat;
  mix-blend-mode: luminosity;
`;

const MobileMenu = styled.div`
  @media screen and (min-width: 990px) {
    display: none;
  }
  position: relative;
  height: 100%;
  width: 250px;

  margin-right: -250px;

  transition: 0.25s ease;

  ${p =>
    p.active &&
    `
    opacity: 1;
    margin-right: 0;
  `}

  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  background-color: #ffffff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);

  padding: 20px;
`;

export { Wrapper, Texture, Content, MobileMenu };
