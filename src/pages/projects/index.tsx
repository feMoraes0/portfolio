import React, { useState, useEffect } from 'react';
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
import Network from '../../helpers/network';
import Image from '../../assets/projects-image.png';
import BackgroundDetail from '../../components/background-detail';
import ProjectListItem from '../../components/project-list-item';

const Projects = () => {
  const [projects, setProjects] = useState<Array<object>>([]);

  const getProjects = async (): Promise<void> => {
    const data = await Network.getData("https://api.github.com/users/feMoraes0/repos?sort=updated&per_page=5");
    setProjects(data);
  }

  useEffect(() => {
    getProjects();
  }, []);

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
                  url={project.html_url}
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