import React from 'react';
import { GlobalContainer } from './style';
import Loading from '../Loading';
import Info from '../../components/Info';

const Home = () => {
  return (
    <>
      <Loading isVisible={false} />
      <GlobalContainer>
        <Info />
      </GlobalContainer>
    </>
  );
}

export default Home;