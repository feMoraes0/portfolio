import React from 'react';
import { GlobalContainer } from './style';
import Loading from '../Loading';
import Info from '../../components/Info';
import Filter from '../../components/filter';
import Grid from '../../components/grid';

const Home = () => {
  return (
    <>
      <Loading isVisible={false} />
      <GlobalContainer>
        <Info />
        <Filter />
        <Grid filter="Python" />
      </GlobalContainer>
    </>
  );
}

export default Home;