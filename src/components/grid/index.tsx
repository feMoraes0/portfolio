import React from 'react';
import {Container, GridItem, Image, GridItemContent} from './style';
import { GridContainerVariant, GridItemVariant } from './animation';

const images: Array<object> = [
  {
    url: 'https://raw.githubusercontent.com/feMoraes0/project-prints/master/nike-web/print-001.png',
    language: 'JavaScript',
  },
  {
    url: 'https://raw.githubusercontent.com/feMoraes0/online-groceries-app/master/prints/screen_01_onboarding.png',
    language: 'Dart',
  },
  {
    url: 'https://raw.githubusercontent.com/feMoraes0/project-prints/master/plants-app/print-001.png',
    language: 'JavaScript',
  },
  {
    url: 'https://raw.githubusercontent.com/feMoraes0/project-prints/master/login-animation/print-001.gif',
    language: 'Dart',
  },
  {
    url: 'https://raw.githubusercontent.com/feMoraes0/project-prints/master/media-dashboard/print-002.png',
    language: 'Python',
  },
  {
    url: 'https://raw.githubusercontent.com/feMoraes0/project-prints/master/clima-app/print-001.png',
    language: 'Java',
  },
  {
    url: 'https://raw.githubusercontent.com/feMoraes0/project-prints/master/wwdc-landing-page/print-001.png',
    language: 'Dart',
  },
  
];

interface GridProps {
  filter: string
};

const Grid = ({ filter}: GridProps) => {
  return (
    <Container variants={GridContainerVariant} initial='initial' animate='animate'>
      {
        images.map((image: any) => {
          if (filter !== "All" && image.language !== filter)
            return null;

          return (
            <GridItem variants={GridItemVariant} >
              <GridItemContent target='_blank' href="https://www.google.com.br">
                <h5>React native online groceries application.</h5>
              </GridItemContent>
              <Image src={image.url} />
            </GridItem>
          )
        })
      }
    </Container>
  );
};

export default Grid;