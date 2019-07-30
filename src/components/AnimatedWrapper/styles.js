import styled from 'styled-components';

export const Wrapper = styled.div`
  .dialog-enter {
    opacity: 0.01;
    transform: scale(0.9);
  }

  .dialog-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 400ms;
  }

  .dialog-exit {
    opacity: 1;
    transform: scale(1);
  }

  .dialog-exit-active {
    opacity: 0.01;
    transform: scale(0.9);
    transition: all 400ms;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;
