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

  const getProjects = async () => {
    const fetchProjects = await Project.getProjects();
    setProjects(fetchProjects);
  }

  useEffect(() => {
    getProjects();
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