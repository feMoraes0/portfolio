import React from 'react';
import {Container, GridItem, Image, GridItemContent} from './style';
import { GridContainerVariant, GridItemVariant } from './animation';

interface GridProps {
  projects: Array<object>,
  filter: string
};

const Grid = ({ projects, filter}: GridProps) => {
  return (
    <Container variants={GridContainerVariant} initial='initial' animate='animate'>
      {
        projects.map((project: any, index: number) => {
          if (filter !== "All" && project.language !== filter)
            return null;

          return (
            <GridItem key={index} variants={GridItemVariant} >
              <GridItemContent target='_blank' href={project.project_url}>
                <h5>{project.description}</h5>
              </GridItemContent>
              <Image src={project.image_url} />
            </GridItem>
          )
        })
      }
    </Container>
  );
};

export default Grid;