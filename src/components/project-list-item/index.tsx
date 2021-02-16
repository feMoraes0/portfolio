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
import { itemVariants } from './animation';

interface ProjectListItemProps {
  title: string,
  time: string,
  subtitle: string,
  url: string,
  language: string
};

const ProjectListItem = ({ title, time, subtitle, url, language }: ProjectListItemProps) => {
  return (
    <ItemBox variants={itemVariants} target="_blank" href={url}>
      <ItemImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="" />
      <ItemContent>
        <ContentMain>
          <ContentTitle>{title}</ContentTitle>
          <ContentSupport>{time}</ContentSupport>
        </ContentMain>
        <ContentSubtitle>{subtitle}</ContentSubtitle>
      </ItemContent>
    </ItemBox>
  );
};

export default ProjectListItem;