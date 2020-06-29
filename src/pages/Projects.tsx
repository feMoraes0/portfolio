import React, { useState } from 'react';
import './Project.css';
import { motion, AnimatePresence } from 'framer-motion';

const projectVariants = {
  initial: { opacity: 0 },
  animate: {opacity: 1 },
  exit: { opacity: 0 }
}

const carrouselTextVariants = {
  initial: {
    opacity: 0,
    y: '100vh',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      duration: 1.0,
    }
  },
  exit: {
    opacity: 0
  }
}

const logoGitVariants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: {
      delay: 0.3,
      duration: 1.6,
    }
  }
}

const cardImageVariants = {
  initial: {
    opacity: 0,
    x: '100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      duration: 1.0,
    }
  },
  exit: {
    opacity: 0,
  }
}

const controlsVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 60,
      duration: 1.0,
    }
  }
}

const Project = () => {
  const [projectId, setProjectId] = useState(0);

  return (
    <motion.div
      id='project'
      variants={projectVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className='carrousel-texts'>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={projectId}
            variants={carrouselTextVariants}
          >
            <h1>Project Name</h1>
            <h3>Praesent bibendum odio eros, blandit laoreet erat mattis sed.</h3>
            <div className='tags'>
              <div className='tag'>reactjs</div>
              <div className='tag'>framer-motion</div>
              <div className='tag'>javascript</div>
              <div className='tag'>animation</div>
              <div className='tag'>portfolio</div>
            </div>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                variants={logoGitVariants}
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              />
            </svg>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='carrousel-cards'>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className='card-image'
            key={projectId}
            variants={cardImageVariants}
          >
            <img src="https://via.placeholder.com/1920x1080" alt="project"/>
          </motion.div>
        </AnimatePresence>
        <motion.div
          className='controls'
          variants={controlsVariants}
        >
          <button onClick={() => setProjectId(projectId + 1)}>
            <svg stroke="currentColor" fill="none" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button>
            <svg stroke="currentColor" fill="none" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <span>{projectId} of 10</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Project;