import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import Menu from '../../components/menu';
import About from '../about';
import Projects from '../projects';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Menu />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path={Projects.route}>
            <Projects.component />
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