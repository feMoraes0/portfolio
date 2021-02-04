import React from 'react';
import { LoadingContainer, LoadingIcon, LoadingIconLines } from './style';
import { LoadingIconVariant, LoadingIconLinesVariant } from './animation';

interface LoadingProps {
  isVisible: boolean
};

const Loading = ({ isVisible }: LoadingProps) => {
  return (
    <LoadingContainer isVisible={isVisible}>
      <LoadingIcon
        variants={LoadingIconVariant}
        initial='initial'
        animate='animate'
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <LoadingIconLines
          variants={LoadingIconLinesVariant}
          d="M16 18 22 12 16 6"
        ></LoadingIconLines>
        <LoadingIconLines
          variants={LoadingIconLinesVariant}
          d="M8 6 2 12 8 18"
        ></LoadingIconLines>
      </LoadingIcon>
    </LoadingContainer>
  )
}

export default Loading;