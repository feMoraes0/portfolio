import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 2;
`;

const ItemText = styled(Link)`
  font-size: 1.80rem;
  letter-spacing: 3px;
  font-weight: 500;
  position: absolute;
  text-decoration: none;
  padding: 2vh 0px;
  text-align: center;
  color: #F7F7F7;
  font-family: 'Lexend Mega', sans-serif;
`;

const TopItemMenu = styled(ItemText)`
  width: 100vw;
  top: 0;
  left: 0;
`;

const BottomItemMenu = styled(ItemText)`
  width: 100vw;
  top: 92vh;
  left: 0;
`;

const LeftItemMenu = styled(ItemText)`
  width: 100vh;
  top: 0;
  left: 0;
  transform: translate(-46vh, 46vh) rotate(90deg);
`;

const RightItemMenu = styled(ItemText)`
  width: 100vh;
  top: 0;
  right: 0;
  transform: translate(46vh, 46vh) rotate(270deg);
`;


export { MenuContainer, TopItemMenu, BottomItemMenu, LeftItemMenu, RightItemMenu };