import React from 'react';
import { InfoContainer, InfoImage, InfoTextBox, InfoTextTitle, InfoTextSubtitle } from './style';
import { InfoContainerVariant, InfoImageVariant, InfoTextBoxVariant, InfoTextVariant } from './animation';

const Info = () => {
  const user = {
    name: 'Fernando de Moraes',
    bio: 'JavaScript/TypeScript and Flutter developer',
    location: 'São Paulo',
    image: 'https://avatars.githubusercontent.com/u/23365401?v=4'
  };

  return (
    <InfoContainer variants={InfoContainerVariant} initial='initial' animate='animate'>
      <InfoImage variants={InfoImageVariant} src={user.image} alt="profile"/>
      <InfoTextBox variants={InfoTextBoxVariant}>
        <InfoTextTitle variants={InfoTextVariant}>{user.name}</InfoTextTitle>
        <InfoTextSubtitle variants={InfoTextVariant}>{user.bio}</InfoTextSubtitle>
        <InfoTextSubtitle variants={InfoTextVariant}>{user.location}</InfoTextSubtitle>
      </InfoTextBox>
    </InfoContainer>
  );
}

export default Info;