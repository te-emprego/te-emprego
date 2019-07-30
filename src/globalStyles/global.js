import { createGlobalStyle } from 'styled-components';
import colors from '@/globalStyles/colors';

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
    background: linear-gradient(
      to bottom left,
      ${colors.darken},
      ${colors.primary}
    );
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track-piece {
    background-color: white;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #673AB7;
  }

`;
