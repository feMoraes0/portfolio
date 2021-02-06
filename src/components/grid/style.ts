import styled from 'styled-components';
import { motion } from 'framer-motion';


const Container = styled(motion.div)`
  margin: 30px 0px;
  column-count: 4;
  column-gap: 10px;
`;

const GridItem = styled(motion.div)`
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
`;

const Image = styled.img`
  width: 100%;
  grid-row: 1 / -1;
  grid-column: 1;
`;

export { Container, GridItem, Image };