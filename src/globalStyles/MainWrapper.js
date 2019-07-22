import styled from 'styled-components';

export const MainWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .alert-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  .alert-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 700ms, transform 700ms;
  }

  .alert-exit {
    opacity: 1;
  }

  .alert-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 700ms, transform 700ms;
  }
`;
