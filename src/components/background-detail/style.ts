import styled from 'styled-components';
import { motion } from 'framer-motion';

const Svg = styled(motion.svg)`
  z-index: 1;

  @media (max-width: 900px) {
    display: none;
  }
`;

export { Svg };