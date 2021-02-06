import React from 'react';
import { InfoContainer, InfoImage, InfoTextBox, InfoTextTitle, InfoTextSubtitle } from './style';

const Info = () => {
  const user = {
    name: 'Fernando de Moraes',
    bio: 'JavaScript/TypeScript and Flutter developer',
    location: 'São Paulo',
    image: 'https://avatars.githubusercontent.com/u/23365401?v=4'
  };

  return (
    <InfoContainer>
      <InfoImage src={user.image} alt="profile"/>
      <InfoTextBox>
        <InfoTextTitle>{user.name}</InfoTextTitle>
        <InfoTextSubtitle>{user.bio}</InfoTextSubtitle>
        <InfoTextSubtitle>{user.location}</InfoTextSubtitle>
      </InfoTextBox>
    </InfoContainer>
  );
}

export default Info;