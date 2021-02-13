import { createGlobalStyle } from 'styled-components'

const GlobalTheme = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: #292830;
  }
`;

export { GlobalTheme };