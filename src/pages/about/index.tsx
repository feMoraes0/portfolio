import React from 'react';
import { AboutContainer, BackgroundContainer, BackgroundImage, ForegroundContainer, Info } from './style';
import { containerVariants, backgroundVariants, ImageVariants, TextVariants } from './animations';
import AboutBackgroundImage from '../../assets/about-image.png';
import BackgroundDetail from '../../components/background-detail';


const About = () => {
  return (
    <AboutContainer
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <BackgroundContainer
        variants={backgroundVariants}
      >
        <BackgroundDetail width="44%" />
        <BackgroundImage
          variants={ImageVariants}
          src={AboutBackgroundImage}
          alt=""
        />
      </BackgroundContainer>
      <ForegroundContainer
        variants={backgroundVariants}
      >
        <Info variants={TextVariants} initial="initial" animate="animate">
          <h1>Hello</h1>
          <h1>I am</h1>
          <h1>Fernando</h1>
        </Info>
        <Info variants={TextVariants} initial="initial" animate="animate">
          <h2>JavaScript</h2>
          <h2>Dart</h2>
          <h2>Python</h2>
          <h2>TypeScript</h2>
        </Info>
      </ForegroundContainer>
    </AboutContainer>
  )
};

export default { component: About, route: '/' };