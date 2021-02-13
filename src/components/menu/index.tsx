import React from 'react';
import { MenuContainer, TopItemMenu, BottomItemMenu, LeftItemMenu, RightItemMenu } from './style';

const Menu = () => {
  return (
    <MenuContainer>
      <TopItemMenu href="/">About</TopItemMenu>
      <BottomItemMenu href="/">Contact</BottomItemMenu>
      <LeftItemMenu href="/">Projects</LeftItemMenu>
      <RightItemMenu href="/">Experiences</RightItemMenu>
    </MenuContainer>
  )
};

export default Menu;