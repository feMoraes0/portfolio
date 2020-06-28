import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <div id='project'>
      <div className='carrousel-texts'>
        <h1>Project Name</h1>
        <h3>Praesent bibendum odio eros, blandit laoreet erat mattis sed.</h3>
        <div className='tags'>
          <div className='tag'>reactjs</div>
          <div className='tag'>framer-motion</div>
          <div className='tag'>javascript</div>
          <div className='tag'>animation</div>
          <div className='tag'>portfolio</div>
        </div>
        <svg stroke="currentColor" fill="none" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      </div>
      <div className='carrousel-cards'>
        <div className='card-image'>
          <img src="https://via.placeholder.com/1920x1080" alt="project"/>
        </div>
        <div className='controls'>
          <button><svg stroke="currentColor" fill="none" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
          <button><svg stroke="currentColor" fill="none" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
          <span>0 of 10</span>
        </div>
      </div>
    </div>
  );
}

export default Project;