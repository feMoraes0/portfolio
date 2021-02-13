import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu';
import About from './pages/about';
// import Projects from './pages/projects';
import { GlobalTheme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <GlobalTheme />
    <Menu />
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);
