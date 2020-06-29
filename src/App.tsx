import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Menu from './components/Menu';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Projects';

const App = () => {
  const location = useLocation();
  return (
    <>
      <Menu/>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/projects'>
            <Project />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;