import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div id='home'>
      <div className="section background">
        <span>NODEJS</span>
        <span>REACTJS</span>
        <span>FLUTTER</span>
      </div>
      <div className="section foreground">
        <div>
          <span>F</span>
          <span>e</span>
          <span>r</span>
          <span>n</span>
          <span>a</span>
          <span>n</span>
          <span>d</span>
          <span>o</span>
        </div>
        <div>
          <span>M</span>
          <span>o</span>
          <span>r</span>
          <span>a</span>
          <span>e</span>
          <span>s</span>
        </div>
      </div>
    </div>
  );
}

export default Home;