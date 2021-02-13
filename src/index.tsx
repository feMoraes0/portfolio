import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu';
import { GlobalTheme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <GlobalTheme />
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);
