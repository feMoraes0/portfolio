import styled from 'styled-components';
import { motion } from 'framer-motion';

interface LoadingContainerProps {
  isVisible: boolean,
}

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #F7F7F7;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: ${(props: LoadingContainerProps) => props.isVisible ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingIcon = styled(motion.svg)`
  width: 12vw;
  height: 12vh;
  color: #181818;
  stroke-width: 1.5;
`;

const LoadingIconLines = styled(motion.path)``;

export { LoadingContainer, LoadingIcon, LoadingIconLines };