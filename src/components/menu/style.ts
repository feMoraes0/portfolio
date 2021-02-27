import styled from 'styled-components';
import { Link } from 'react-router-dom';


const MenuContainer = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 2;

  @media only screen and (max-width: 375px) {
    display: absolute;
    bottom: 0;
    left: 0;
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #292830;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-top: .5px solid rgba(255, 255, 255, 0.1);
  }
`;

const Item = styled(Link)`  
  position: absolute;
  text-decoration: none;
  padding: 2vh 0px;
  text-align: center;

  @media only screen and (max-width: 375px) {
    position: relative;
    padding: 0;
    color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ItemText = styled.span`
  font-size: 1.80rem;
  letter-spacing: 3px;
  font-weight: 500;
  color: #F7F7F7;
  font-family: 'Lexend Mega', sans-serif;

  @media only screen and (max-width: 375px) {
    display: none;
  }
`;

const TopItemMenu = styled(Item)`
  width: 100vw;
  top: 0;
  left: 0;

  @media only screen and (max-width: 375px) {
    width: 25%;
    height: 100%;
    border-top-left-radius: 10px;
  }
`;

const BottomItemMenu = styled(Item)`
  width: 100vw;
  top: 92vh;
  left: 0;

  @media only screen and (max-width: 375px) {
    width: 25%;
    height: 100%;
    top: 0;
  }
`;

const LeftItemMenu = styled(Item)`
  width: 100vh;
  top: 0;
  left: 0;
  transform: translate(-46vh, 46vh) rotate(90deg);

  @media only screen and (max-width: 375px) {
    width: 25%;
    height: 100%;
    transform: translate(0, 0);
  }
`;

const RightItemMenu = styled(Item)`
  width: 100vh;
  top: 0;
  right: 0;
  transform: translate(46vh, 46vh) rotate(270deg);

  @media only screen and (max-width: 375px) {
    width: 25%;
    height: 100%;
    transform: translate(0, 0);
    border-top-right-radius: 10px;
  }
`;

const MenuIcon = styled.img`
  color: white;
  height: 30px;
`;


export { MenuContainer, TopItemMenu, BottomItemMenu, LeftItemMenu, RightItemMenu, MenuIcon, ItemText };