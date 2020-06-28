import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Router>
        <Menu/>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;