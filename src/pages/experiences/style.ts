import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageScaffoldContainer } from '../../global/style';

const ExperienceContainer = styled(PageScaffoldContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const ContentImageSide = styled(motion.div)`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: center;
  align-items: center;
`;

const Image = styled(motion.img)`
  width: 57%;
  position: absolute;
  z-index: 2;
  margin-left: 30%;
  margin-bottom: 20px;
`;

const ContentInfoSide = styled.div`
  width: 50%;
  height: 100%;
  padding: 15vh 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: #F7F7F7;
  font-weight: 600;
  margin-bottom: 10px;
  letter-spacing: 1.3px;
`;

const Subtitle = styled(motion.h5)`
  font-size: 0.9rem;
  font-weight: 400;
  color: #A7A7A7;
  letter-spacing: 1.3px;
`;

const CardBox = styled(motion.div)`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5vw;
`;

const Card = styled(motion.div)`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`;
const ImageCard = styled.img`
  width: 35%;
  max-width: 90px;
  border-radius: 100%;
`;
const TitleCard = styled.span`
  font-size: 1.125rem;
  margin: 15px auto;
  color: #C7C7C7;
`;
const SubtitleCard = styled.span`
  font-size: 0.875rem;
  color: #C7C7C7;
`;

export {
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
}