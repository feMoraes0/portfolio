import React from 'react';
import {
  ItemBox,
  ItemImage,
  ItemContent,
  ContentMain,
  ContentTitle,
  ContentSupport,
  ContentSubtitle
} from './style';

const ProjectListItem = () => {
  return (
    <ItemBox href="/">
      <ItemImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="" />
      <ItemContent>
        <ContentMain>
          <ContentTitle>Project-title-or-name</ContentTitle>
          <ContentSupport>4 hours ago</ContentSupport>
        </ContentMain>
        <ContentSubtitle>[portfolio] Frontend built with ReactJS and Typescript.</ContentSubtitle>
      </ItemContent>
    </ItemBox>
  );
};

export default ProjectListItem;