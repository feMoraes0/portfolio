import React from 'react';
import {
  ProjectsContainer,
  Title,
  Content,
  ContentImageSide,
  ContentImage,
  ContentProjectSide,
  ProjectList,
} from './style';
import { hideShowVariants, containerImageVariants } from '../../global/animation';
import { imageVariants, listVariants } from './animation';
import Image from '../../assets/projects-image.png';
import BackgroundDetail from '../../components/background-detail';
import ProjectListItem from '../../components/project-list-item';

const Projects = () => {
  return (
    <ProjectsContainer
      variants={hideShowVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Title>These are some of my projects, you can find all of them <a target="_blanck" href="http://www.github.com/femoraes0">here</a>.</Title>
      <Content>
        <ContentProjectSide>
          <ProjectList variants={listVariants}>
            <ProjectListItem />
            <ProjectListItem />
            <ProjectListItem />
            <ProjectListItem />
            <ProjectListItem />
          </ProjectList>
        </ContentProjectSide>
        <ContentImageSide variants={containerImageVariants}>
          <BackgroundDetail width="100%" shapeNumber={1} />
          <ContentImage variants={imageVariants} src={Image} alt="" />
        </ContentImageSide>
      </Content>
    </ProjectsContainer>
  );
};

export default { component: Projects, route: '/projects' };