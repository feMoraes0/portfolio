import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app';
import { GlobalTheme } from './global/style';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalTheme />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
