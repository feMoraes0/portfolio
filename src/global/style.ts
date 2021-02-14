import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalTheme = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    outline: none;
    user-select: none;
  }

  body {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: #292830;
  }
`;

const PageScaffoldContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  padding: 0px 10vw;
`;

export { GlobalTheme, PageScaffoldContainer };