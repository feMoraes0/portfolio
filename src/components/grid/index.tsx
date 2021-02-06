import React from 'react';
import {Container, GridBox, Image} from './style';

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

const Grid = () => {
  return (
    <Container>
      {
        images.map((image: any) => (
          <GridBox>
            <Image src={image.url} />
          </GridBox>
        ))
      }
    </Container>
  );
};

export default Grid;