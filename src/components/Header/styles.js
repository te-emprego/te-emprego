import styled from 'styled-components';
import colors from '@/globalStyles/colors';

const Right = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 45vw;

  @media screen and (max-width: 576px) {
    position: fixed;
    z-index: 1;
  }

  @media screen and (min-width: 577px) and (max-width: 960px) {
    position: fixed;
  }
`;

const Avatar = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 100%;
  background-color: gray;
`;

const InfoUser = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const UserName = styled.div`
  color: ${colors.primary};
  font-weight: 700;
  margin-right: 15px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MobileBar = styled.div`
  height: 68px;
  display: flex;
  align-items: top;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const Menu = styled.div`
  z-index: 1;
  position: fixed;
  right: 10vw;

  @media screen and (max-width: 576px) {
    right: 3vw;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  margin: 1em 0;
`;

const Logo = styled.img`
  width: 18em;

  @media screen and (min-width: 375px) {
    width: 20em;
  }
`;

export {
  Container,
  Wrapper,
  Logo,
  Right,
  MobileBar,
  InfoUser,
  UserName,
  TopBar,
  Menu,
  Avatar,
};
