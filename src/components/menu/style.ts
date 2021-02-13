import styled from 'styled-components';

const MenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ItemText = styled.a`
  font-size: 1.80rem;
  letter-spacing: 3px;
  font-weight: 500;
  position: absolute;
  text-decoration: none;
  padding: 2vh 0px;
  text-align: center;
  color: #222;
  font-family: 'Lexend Mega', sans-serif;
`;

const TopItemMenu = styled(ItemText)`
  width: 100vw;
  top: 0;
  left: 0;
`;

const BottomItemMenu = styled(ItemText)`
  width: 100vw;
  bottom: 0;
  left: 0;
`;

const LeftItemMenu = styled(ItemText)`
  width: 100vh;
  top: 0;
  left: 0;
  transform: translate(-46.1vh, 46.1vh) rotate(90deg);
`;

const RightItemMenu = styled(ItemText)`
  width: 100vh;
  top: 0;
  right: 0;
  transform: translate(46.1vh, 46.1vh) rotate(270deg);
`;


export { MenuContainer, TopItemMenu, BottomItemMenu, LeftItemMenu, RightItemMenu };