import styled from 'styled-components';

const Wrapper = styled.div`
  color: #ffffff;
  height: 140px;
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding-top: 60px;
    text-align: center;
  }
`;

const Logo = styled.img`
  max-width: 100%;
`;

export { Wrapper, Logo };
