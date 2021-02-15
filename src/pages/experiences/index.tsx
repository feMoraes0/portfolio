import React from 'react';
import {
  ExperienceContainer,
  ContentImageSide,
  Image,
  ContentInfoSide,
  Title,
  Subtitle,
  CardBox,
  Card,
  ImageCard,
  TitleCard,
  SubtitleCard,
} from './style';
import { imageVariants, cardVariants, cardBoxVariants, cardTextVariants } from './animation';
import { hideShowVariants, containerImageVariants } from '../../global/animation';
import BackgroundDetail from '../../components/background-detail';
import ExperienceImage from '../../assets/experiences-image.png';
import Vivinho from '../../assets/vivinho.jpeg';
import Made from '../../assets/made.jpeg';

const Experiences = () => {
  return (
    <ExperienceContainer
      variants={hideShowVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ContentImageSide variants={containerImageVariants}>
        <BackgroundDetail width="100%" />
        <Image variants={imageVariants} src={ExperienceImage} alt="" />
      </ContentImageSide>
      <ContentInfoSide>
        <Title variants={cardTextVariants}>Companies</Title>
        <Subtitle variants={cardTextVariants}>I'm really grateful for everything that these companies taught, and teach, me and all experiences which I had working there.</Subtitle>
        <CardBox variants={cardBoxVariants}>
          <Card variants={cardVariants}>
            <ImageCard src={Vivinho} alt="" />
            <TitleCard>Junior Analyst</TitleCard>
            <SubtitleCard>Aug 2020 - Present</SubtitleCard>
          </Card>
          <Card variants={cardVariants}>
            <ImageCard src={Made} alt="" />
            <TitleCard>Junior PHP Developer</TitleCard>
            <SubtitleCard>Sep 2018 - Dec 2018</SubtitleCard>
          </Card>
        </CardBox>
      </ContentInfoSide>
    </ExperienceContainer>
  );
};

export default { component: Experiences, route: '/experiences' };