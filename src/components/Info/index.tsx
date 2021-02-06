import React from 'react';
import { InfoContainer, InfoImage, InfoTextBox, InfoTextTitle, InfoTextSubtitle } from './style';

const Info = () => {
  return (
    <InfoContainer>
      <InfoImage src="https://media-exp1.licdn.com/dms/image/C4D03AQFolqc4rNjJrg/profile-displayphoto-shrink_800_800/0/1585579077027?e=1617840000&v=beta&t=XnTqbrR2xdMH8DMEmaTKXVCmnp_suVJ9IPsao6QZNao" alt="profile"/>
      <InfoTextBox>
        <InfoTextTitle>Fernando Moraes</InfoTextTitle>
        <InfoTextSubtitle>JavaScript/TypeScript and Flutter developer</InfoTextSubtitle>
        <InfoTextSubtitle>São Paulo</InfoTextSubtitle>
      </InfoTextBox>
    </InfoContainer>
  );
}

export default Info;