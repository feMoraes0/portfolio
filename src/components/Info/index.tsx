import React from 'react';
import { InfoContainer, InfoImage, InfoTextBox, InfoTextTitle, InfoTextSubtitle } from './style';

const Info = () => {
  return (
    <InfoContainer>
      <InfoImage src="https://avatars.githubusercontent.com/u/23365401?v=4" alt="profile"/>
      <InfoTextBox>
        <InfoTextTitle>Fernando Moraes</InfoTextTitle>
        <InfoTextSubtitle>JavaScript/TypeScript and Flutter developer</InfoTextSubtitle>
        <InfoTextSubtitle>São Paulo</InfoTextSubtitle>
      </InfoTextBox>
    </InfoContainer>
  );
}

export default Info;