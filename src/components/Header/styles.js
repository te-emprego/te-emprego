import styled from 'styled-components';
import { device } from '@/globalStyles/media';

const Container = styled.div`
  width: 1340px;
  margin: auto;
  @media ${device.mobileLg} {
    display: flex;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  color: #ffffff;
  height: 86px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img``;

export { Container, Wrapper, Logo };
