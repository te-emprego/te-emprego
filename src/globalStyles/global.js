import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,body, #root {
    min-height: 100%;
  }

  body {
    font-family: "Nunito", cursive, sans-serif;
    -webkit-font-smoothing: antialiased !important;
    transition: .25s ease;
    min-height: 100%;
  }

  .route-section {
    min-width: 100%;
    min-height: 100%;
    position: relative;
  }

  .route-transition-enter {
    opacity: 0;
    transform: translateX(-50%);
    transition: ease .5s;
  }
  .route-transition-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: ease .5s;
  }
  .route-transition-exit {
    opacity: 1;
    transform: translateX(0);
    transition: ease .5s;
  }
  .route-transition-exit-active {
    opacity: 0;
    transform: translateX(50%);
    transition: ease .5s;
  }
`;
