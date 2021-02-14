import React from 'react';
import {Svg} from './style';
import {SvgVariants} from './animation';

interface BackgroundDetailProps {
  width: string,
};

const BackgroundDetail = ({ width }: BackgroundDetailProps) => {
  return (
    <Svg
      variants={SvgVariants}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      x="0px"
      y="0px"
      viewBox="0 0 288 288"
    >
      <linearGradient id="PSgrad_0" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
        <stop offset="0%" stopColor="rgb(95,54,152)" stopOpacity={1} />
        <stop offset="100%" stopColor="rgb(247,109,138)" stopOpacity={1} />
      </linearGradient>
      <path fill="url(#PSgrad_0)"
        d="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
        c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
        c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
        c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
      />
    </Svg>
  );
};

export default BackgroundDetail;