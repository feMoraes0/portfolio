import styled from 'styled-components';
import { motion } from 'framer-motion';

const ItemBox = styled(motion.a)`
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ItemImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const ItemContent = styled.div`
  width: 100%;
`;

const ContentMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ContentTitle = styled.p`
  font-size: 1.125rem;
  color: #F7F7F7;
  font-weight: 400;
  letter-spacing: 1.3px;
`;

const ContentSupport = styled.p`
  font-size: 1rem;
  color: #878787;
  font-weight: 300;
  letter-spacing: 1.3px;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const ContentSubtitle = styled.p`
  font-size: 0.80rem;
  color: #F7F7F7;
  font-weight: 300;
  letter-spacing: 1.3px;
`;

export { ItemBox, ItemImage, ItemContent, ContentMain, ContentTitle, ContentSupport, ContentSubtitle };