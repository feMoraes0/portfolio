import React from 'react';
import { GlobalContainer } from './style';
import Loading from '../Loading';

const Home = () => {
  return (
    <GlobalContainer>
      <Loading isVisible={false} />
      <h1> Version 2.0 Coming soon </h1>
    </GlobalContainer>
  );
}

export default Home;