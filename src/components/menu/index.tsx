import React from 'react';
import { MenuContainer, TopItemMenu, BottomItemMenu, LeftItemMenu, RightItemMenu, MenuIcon, ItemText } from './style';
import Git from '../../assets/icons/git.svg';
import Building from '../../assets/icons/building.svg';
import Mail from '../../assets/icons/mail.svg';
import Person from '../../assets/icons/person.svg';

const Menu = () => {
  return (
    <MenuContainer>
      <TopItemMenu to="/">
        <ItemText>About</ItemText>
        <MenuIcon src={Person} alt="" />
      </TopItemMenu>
      <RightItemMenu to="/experiences">
        <ItemText>Experiences</ItemText>
        <MenuIcon src={Building} alt="" />
      </RightItemMenu>
      <LeftItemMenu to="/projects">
        <MenuIcon src={Git} alt="" />
        <ItemText>Projects</ItemText>
      </LeftItemMenu>
      <BottomItemMenu to="/contact">
        <ItemText>Contact</ItemText>
        <MenuIcon src={Mail} alt="" />
      </BottomItemMenu>
    </MenuContainer>
  )
};

export default Menu;