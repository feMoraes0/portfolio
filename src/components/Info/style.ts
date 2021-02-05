import styled from 'styled-components';

const InfoContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5vh 0px;
`;

const InfoImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  margin-right: 25px;
`;

const InfoTextBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const InfoTextTitle = styled.p`
  font-size: 2.75rem;
  font-weight: 600;
  line-height: 3rem;
  color: #222;
`;

const InfoTextSubtitle = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 2rem;
  color: #888;
  letter-spacing: 1.2;
`;

export { InfoContainer, InfoImage, InfoTextBox, InfoTextTitle, InfoTextSubtitle };