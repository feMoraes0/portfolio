import React from 'react';
import { MenuContainer, TopItemMenu, BottomItemMenu, LeftItemMenu, RightItemMenu } from './style';

const Menu = () => {
  return (
    <MenuContainer>
      <TopItemMenu to="/">About</TopItemMenu>
      <BottomItemMenu to="/contact">Contact</BottomItemMenu>
      <LeftItemMenu to="/projects">Projects</LeftItemMenu>
      <RightItemMenu to="/experiences">Experiences</RightItemMenu>
    </MenuContainer>
  )
};

export default Menu;