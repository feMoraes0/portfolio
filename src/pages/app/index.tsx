import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Project from '../../models/project';
import Menu from '../../components/menu';
import About from '../about';
import Projects from '../projects';
import Experiences from '../experiences';
import Contact from '../contact';

const App = () => {
  const [projects, setProjects] = useState<Array<object>>([]);
  const location = useLocation();
  const pageTitleOptions = [
    'Fernando Moraes',
    'Full Stack Developer',
    'JavaScript Developer'
  ]

  const getProjects = async () => {
    const fetchProjects = await Project.get();
    setProjects(fetchProjects);
  }

  const updatePageTitle = (index: number) => {
    setTimeout(() => {
      if( index >= pageTitleOptions.length )
        index = 0;
      document.title = pageTitleOptions[index];
      updatePageTitle(++index);
    }, 3000);
  }

  useEffect(() => {
    updatePageTitle(0);
    getProjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Menu />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key} >
          <Route path={Experiences.route}>
            <Experiences.component />
          </Route>

          <Route path={Contact.route}>
            <Contact.component />
          </Route>
          
          <Route path={Projects.route}>
            <Projects.component projects={projects} />
          </Route>

          <Route path={About.route}>
            <About.component />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;