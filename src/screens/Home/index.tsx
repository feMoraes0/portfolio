import React, { useState } from 'react';
import { GlobalContainer } from './style';
import Loading from '../Loading';
import Info from '../../components/Info';
import Filter from '../../components/filter';
import Grid from '../../components/grid';

const Home = () => {

  const [filter, setFilter] = useState("All");

  const updateFilter = (filter: string) => {
    setFilter(filter);
  }

  return (
    <>
      <Loading isVisible={false} />
      <GlobalContainer>
        <Info />
        <Filter onUpdate={updateFilter} currentFilter={filter} />
        <Grid filter={filter} />
      </GlobalContainer>
    </>
  );
}

export default Home;