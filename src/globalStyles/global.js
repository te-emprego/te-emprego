import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,body, #root {
    min-height: 100%;
    overflow-x: hidden;
    width:100%;
  }

  body {
    font-family: "Nunito", cursive, sans-serif;
    -webkit-font-smoothing: antialiased !important;
    transition: .25s ease;
    min-height: 100%;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center top;
  }
`;
