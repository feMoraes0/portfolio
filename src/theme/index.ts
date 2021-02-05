import { createGlobalStyle } from 'styled-components'

const GlobalTheme = createGlobalStyle`
  * {
    font-family: 'Saira Semi Condensed', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;

export { GlobalTheme };