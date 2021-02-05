import React from 'react';
import { GlobalContainer } from './style';
import Loading from '../Loading';
import Info from '../../components/Info';
import Filter from '../../components/filter';

const Home = () => {
  return (
    <>
      <Loading isVisible={false} />
      <GlobalContainer>
        <Info />
        <Filter />
      </GlobalContainer>
    </>
  );
}

export default Home;