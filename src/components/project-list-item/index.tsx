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
import Project from '../../models/project';

interface ProjectListItemProps {
  title: string,
  time: string,
  subtitle: string,
  url: string,
  language: string
};

const ProjectListItem = ({ title, time, subtitle, url, language }: ProjectListItemProps) => {

  const getConvertedTime = (time: string) => {
    const splitted = time.split("T");
    const dataParts = splitted[0].split("-");
    return `${dataParts[2]}/${dataParts[1]}/${dataParts[0]}`;
  }

  return (
    <ItemBox variants={itemVariants} target="_blank" href={url}>
      <ItemImage src={Project.getImage(language)} alt={language} />
      <ItemContent>
        <ContentMain>
          <ContentTitle>{title}</ContentTitle>
          <ContentSupport>{getConvertedTime(time)}</ContentSupport>
        </ContentMain>
        <ContentSubtitle>{subtitle}</ContentSubtitle>
      </ItemContent>
    </ItemBox>
  );
};

export default ProjectListItem;