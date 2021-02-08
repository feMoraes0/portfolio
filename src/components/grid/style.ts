import styled from 'styled-components';
import { motion } from 'framer-motion';


const Container = styled(motion.div)`
  margin: 30px 0px;
  column-count: 4;
  column-gap: 10px;
`;

const GridItemContent = styled.a`
  position: absolute;
  text-decoration: none;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  padding: 30px;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > h5 {
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.3px;
    font-weight: 300;
  }
`;

const GridItem = styled(motion.div)`
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
  position: relative;

  &:hover > ${GridItemContent} {
    display: flex;
  }
`;

const Image = styled.img`
  width: 100%;
  grid-row: 1 / -1;
  grid-column: 1;
`;



export { Container, GridItem, Image, GridItemContent };