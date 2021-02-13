import styled from 'styled-components';

const AboutContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.img`
  width: 34%;
  position: absolute; 
  cursor: pointer;
`;

const BackgroundSvg = styled.svg`
  width: 44%;
`;

const ForegroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0px 8vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-diretion: row;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  h1 {
    font-size: 8rem;
    color: #F7F7F7;
    letter-spacing: 0.45rem;
    font-weight: 900;
  }

  h2 {
    font-size: 6.5rem;
    color: rgba(0, 0, 0, 0.05);
    letter-spacing: 0.45rem;
    font-weight: 900;
    text-align: right;
  }
`;

export { AboutContainer, BackgroundContainer, BackgroundImage, BackgroundSvg, ForegroundContainer, Info};