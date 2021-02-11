import React, { useEffect, useState } from 'react';
import { GlobalContainer } from './style';
import Loading from '../Loading';
import Info from '../../components/Info';
import Filter from '../../components/filter';
import Grid from '../../components/grid';
import FakeData  from '../../data/repositories.json';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<Array<object>>([]);
  const [languages, setLanguages] = useState<Array<string>>([]);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    setProjects(FakeData);

    let tempLanguages: Array<string> = ['All'];
    FakeData.map((project) => {
      if(!tempLanguages.includes(project.language))
        tempLanguages.push(project.language);
      return null;
    });
    setLanguages(tempLanguages);

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
        <Filter options={languages} onUpdate={updateFilter} currentFilter={filter} />
        <Grid projects={projects} filter={filter} />
      </GlobalContainer>
    </>
  );
}

export default Home;