import React, { useEffect, useState } from 'react';
import { GlobalContainer } from './style';
import Loading from '../Loading';
import Info from '../../components/Info';
import Filter from '../../components/filter';
import Grid from '../../components/grid';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2000);
  },  []);

  const updateFilter = (filter: string) => {
    setFilter(filter);
  }

  return (
    <>
      <Loading isVisible={loading} />
      <GlobalContainer isVisible={!loading}>
        <Info />
        <Filter onUpdate={updateFilter} currentFilter={filter} />
        <Grid filter={filter} />
      </GlobalContainer>
    </>
  );
}

export default Home;