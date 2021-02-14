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
import Image from '../../assets/projects-image.png';
import BackgroundDetail from '../../components/background-detail';
import ProjectListItem from '../../components/project-list-item';

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title>These are some of my projects, you can find all of them <a href="http://www.github.com/femoraes0">here</a>.</Title>
      <Content>
        <ContentProjectSide>
          <ProjectList>
            <ProjectListItem />
            <ProjectListItem />
            <ProjectListItem />
            <ProjectListItem />
            <ProjectListItem />
          </ProjectList>
        </ContentProjectSide>
        <ContentImageSide>
          <BackgroundDetail width="100%" />
          <ContentImage src={Image} alt="" />
        </ContentImageSide>
      </Content>
    </ProjectsContainer>
  );
};

export default Projects;