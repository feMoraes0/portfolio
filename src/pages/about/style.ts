import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
`;

const BackgroundContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled(motion.img)`
  width: 34%;
  position: absolute;
  cursor: pointer;
  z-index: 2;

  @media only screen and (max-width: 900px) {
    width: 300px;
  }

  @media only screen and (max-width: 375px) {
    width: 65%;
  }
`;

const ForegroundContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  padding: 0px 8vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-diretion: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 900px) {
    padding: 0;
    flex-direction: column;
    justify-content: center;
  }
`;

const Info = styled(motion.div)`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  h1 {
    font-size: 8rem;
    color: #F7F7F7;
    letter-spacing: 0.45rem;
    font-weight: 900;
  }

  h2 {
    font-size: 6.5rem;
    color: rgba(0, 0, 0, 0.05);
    letter-spacing: 0.45rem;
    font-weight: 900;
    text-align: right;
  }

  @media only screen and (max-width: 1600px) {
    h1 {
      font-size: 6.1rem;
    }

    h2 {
      font-size: 5.1rem;
    }
  }

  @media only screen and (max-width: 1366px) {
    h1 {
      font-size: 5.8rem;
    }

    h2 {
      font-size: 4.4rem;
    }
  }

  @media only screen and (max-width: 900px) {
    justify-content: center;
    height: 100vh;

    h1 {
      font-size: 3rem;
      text-align: center;
    }

    h2 {
      font-size: 3rem;
      color: rgba(0, 0, 0, 0.55);
      text-align: center;
    }
  }
`;

export { AboutContainer, BackgroundContainer, BackgroundImage, ForegroundContainer, Info};