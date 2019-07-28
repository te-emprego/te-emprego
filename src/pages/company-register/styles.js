import styled from 'styled-components';

import colors from '@/globalStyles/colors';
import { Input } from '@/globalStyles/input';

export const Root = styled.div`
  background: ${colors.white};
  height: 100vh;
  position: relative;
  overflow: hidden;
  text-align: center;

  @media screen and (max-width: 748px) {
    overflow: scroll;
    position: inherit;
  }
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 10px 0;
    background: ${props =>
      props.mobile
        ? `linear-gradient(${colors.darken}, ${colors.primary})`
        : 'inherit'};
    border-radius: ${props =>
        props.mobile ? '0px 0px 120px 120px' : 'inherit'}
      img {
      margin-top: -20px;
      width: 250px;
      height: 50px;
    }
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 748px) {
    margin: 0;
    width: 100%;
    display: block;
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

  @media screen and (max-width: 748px) {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

  @media screen and (max-width: 748px) {
    margin: 20px;
  }
`;

export const Form = styled.form`
  margin-left: -30px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 748px) {
    display: block;
    height: 100%;
    margin: auto;
  }

  div {
    width: 100%;
    padding: 0 10px;

    @media screen and (max-width: 748px) {
      flex-direction: column;
    }
  }

  > div:last-child {
    text-align: right;

    @media screen and (max-width: 748px) {
      margin: 0;
      text-align: center;
      align-self: inherit;
    }

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

export const Inputs = styled.div`
  display: flex;

  label {
    width: 100%;
    padding: 10px;
    margin: 20px 0;
    background: transparent;
    display: table;
    color: ${colors.darken};
    font-size: 1.1rem;
    border-bottom: 1px solid ${colors.darken};
    text-align: left;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      vertical-align: middle;
    }

    input[type='file'] {
      display: none;
    }
  }
`;

export const StyledInput = styled(Input)`
  color: ${colors.darken};
  border-bottom: 1px solid ${colors.darken};
  width: 100%;

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
    margin: 10px 0;
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
