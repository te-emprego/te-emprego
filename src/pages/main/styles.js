import styled from 'styled-components';
import background from '@images/background.svg';

const Container = styled.div`
  width: 1340px;
  margin: auto;
`;

export const MainBackground = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center top;
`;

export const MainContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  > div:first-child {
    width: 990px;
  }
  > div:last-child {
    width: 320px;
  }
`;

const WidgetWrapper = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding: 20px;
`;

export const MainWrapper = WidgetWrapper;
