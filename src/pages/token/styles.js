import styled from 'styled-components';

import colors from '@/globalStyles/colors';

export const Root = styled.div`
  background: linear-gradient(${colors.darken}, ${colors.primary});
  height: 100vh;
  text-align: center;
`;

export const HeaderLogin = styled.div`
  padding: 100px 80px 20px 80px;
  text-align: left;

  @media screen and (max-width: 748px) {
    padding: 0 25px 0;

    img {
      width: 200px;
      height: 80px;
    }
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
    margin: 30px 0;
    font-size: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const TokenWrapper = styled.div`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  width: 350px;
  align-self: center;

  span {
    padding: 24px 36px;
    background: ${colors.white};
    border-radius: 5px;
    color: ${colors.primary};
    margin: 20px 0 40px 0;
  }
`;
