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

interface ProjectsProps {
  projects: Array<object>
};

const Projects = ({ projects }: ProjectsProps) => {

  return (
    <ProjectsContainer
      variants={hideShowVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Content>
        <ContentProjectSide>
          <Title>These are some of my projects, you can find all of them <a target="_blanck" href="http://www.github.com/femoraes0">here</a>.</Title>
          <ProjectList variants={listVariants}>
            {
              projects.map((project: any, index: number) => (
                <ProjectListItem
                  key={index}
                  title={project.name}
                  time={project.updated_at}
                  subtitle={project.description}
                  url={project.url}
                  language={project.language}
                />
              ))
            }
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