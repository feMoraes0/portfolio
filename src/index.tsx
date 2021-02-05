import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import { GlobalTheme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <GlobalTheme />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
