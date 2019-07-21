import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const MainContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  @media (min-width: 320px) and (max-width: 767px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    display: block;
  }
  > div:first-child {
    width: 990px;
    @media (min-width: 320px) and (max-width: 767px) {
      width: 100%;
    }
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
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 5px;
  }
`;

export const MainWrapper = WidgetWrapper;
