import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapperSidebar = styled.div`
  display: none;

  @media screen and (min-width: 992px) {
    display: contents;
  }
`;

export { Container, WrapperSidebar };
