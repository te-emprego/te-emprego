import styled from 'styled-components';
import { device } from '@/globalStyles/media';

const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const MainContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  @media ${device.mobileLg} {
    display: block;
  }
  > div:first-child {
    width: 990px;
    @media ${device.mobileLg} {
      width: 100%;
      border-radius: 0;
    }
  }
  > div:last-child {
    width: 320px;
    @media ${device.mobileLg} {
      position: fixed;
      top: 30%;
      right: 0;
      display: none;
    }
  }
`;

const WidgetWrapper = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding: 20px;
  @media ${device.mobileLg} {
    background-color: transparent;
    padding: 1.5rem;
  }
`;

export const MainWrapper = WidgetWrapper;
