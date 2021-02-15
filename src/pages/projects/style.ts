import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageScaffoldContainer } from '../../global/style';

const ProjectsContainer = styled(PageScaffoldContainer)`
  padding-top: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #F7F7F7;
  font-weight: 300;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: rgb(95,54,152);
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContentImageSide = styled(motion.div)`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentImage = styled(motion.img)`
  width: 25%;
  position: absolute;
  transform: translateY(-10%);
  z-index: 2;
`;

const ContentProjectSide = styled(ContentImageSide)`
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

const ProjectList = styled(motion.div)`
  width: 100%;
`;

export {
  ProjectsContainer,
  Title,
  Content,
  ContentImageSide,
  ContentImage,
  ContentProjectSide,
  ProjectList,
};