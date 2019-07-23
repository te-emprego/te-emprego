import styled from 'styled-components';

import colors from '@/globalStyles/colors';

export const Root = styled.div`
  background: linear-gradient(${colors.darken}, ${colors.primary});
  height: 100vh;
  position: relative;
  overflow: hidden;
  text-align: center;
`;

export const HeaderLogin = styled.div`
  padding: 100px 80px 20px 80px;
  text-align: left;

  @media screen and (max-width: 748px) {
    padding: 80px 25px 0;
  }
`;

export const CenteredWrapper = styled.div`
  width: 355px;
  margin: auto;
  text-align: center;
  margin-top: 100px;

  @media screen and (max-width: 748px) {
    margin-top: 50px;
    padding: 30px;
  }

  h1,
  p {
    text-shadow: 0 3px 6px ${colors.shadowBox};
    color: ${colors.white};
  }

  h1 {
    text-transform: uppercase;
    font-size: 3rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
  }

  p {
    padding: 20px;
    margin-top: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-family: 'Raleway', sans-serif;
      &:first-child {
        padding: 24px 36px;
        background: ${colors.white};
        border-radius: 5px;
        color: ${colors.primary};
        margin: 20px 0;
      }
      &:last-child {
        margin-top: 16px;
        color: ${colors.white};
      }
    }
  }
`;
