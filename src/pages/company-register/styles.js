import styled from 'styled-components';

import colors from '@/globalStyles/colors';
import { Input } from '@/globalStyles/input';

export const Root = styled.div`
  background: ${colors.white};
  height: 100vh;
  position: relative;
  overflow: hidden;
  text-align: center;
`;

export const HeaderLogin = styled.div`
  padding: 70px 80px 50px 50px;
  text-align: left;
  z-index: 2;
  position: relative;

  @media screen and (max-width: 1366px) {
    padding: 80px 25px 0;
  }

  @media screen and (max-width: 748px) {
    padding: 80px 25px 0;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 748px) {
    margin-top: 50px;
    padding: 30px;
  }
`;

export const InsideWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
  margin: 50px 0 0 350px;

  @media screen and (max-width: 1366px) {
    margin: 50px 0 0 200px;
  }

  h1,
  p {
    text-shadow: 0 3px 6px ${colors.shadowBox};
    color: ${colors.darken};
  }

  h1 {
    text-transform: uppercase;
    font-size: 3rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
  }

  p {
    margin-left: 5px;
  }
`;

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div:last-child {
    align-self: flex-end;
    text-align: right;
    margin-right: 60px;

    p {
      color: ${colors.shadowText};
      font-size: 0.7rem;
    }

    a {
      color: ${colors.darken};
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
`;

export const Form = styled.form`
  margin-left: -30px;
  display: flex;
  width: 100%;

  div {
    width: 50%;
  }
`;

export const StyledInput = styled(Input)`
  color: ${colors.darken};
  border-bottom: 1px solid ${colors.darken};
  width: 90%;

  &::placeholder {
    color: ${colors.darken};
  }
`;

export const Button = styled.button`
  border: none;
  width: 200px;
  margin: 20px 0;
  padding: 10px 30px;
  background: ${colors.darken};
  color: ${colors.white};
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin: -70px 0;

  @media screen and (max-width: 748px) {
    margin-bottom: 20px;
  }

  p {
    text-transform: uppercase;
    font-size: 0.775rem;
  }

  div {
    margin: 0 auto;
    display: flex;
    margin-top: 10px;
    color: ${colors.darken};

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      border: none;
      padding: 5px 7px;
      margin: 0 10px;
      background: ${colors.white};
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 0px 3px 6px ${colors.shadowBox};

      span {
        margin: 0 3px 0 5px;
        color: ${colors.primary};
      }
    }

    > button:last-child {
      background: ${colors.darken};
      span {
        color: ${colors.white};
      }
    }
  }
`;
