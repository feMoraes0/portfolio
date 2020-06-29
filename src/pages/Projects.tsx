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
  const projects = [
    {
      name: 'Framer Playground',
      description: 'Project to play and test framer motion animations.',
      print: 'https://raw.githubusercontent.com/feMoraes0/project-prints/master/framer-playground/dark-theme.gif',
      url: 'https://github.com/feMoraes0/framer-playground',
      tags: ['framer-motion', 'react', 'javascript', 'animation', 'react-router-dom', 'eslint', 'google-fonts']
    },
    {
      name: 'Media Dashboard',
      description: '[Frontend Mentor Challenge] Media dashboard page built with ReactJS and TypeScript.',
      print: 'https://raw.githubusercontent.com/feMoraes0/project-prints/master/media-dashboard/print-001.png',
      url: 'https://github.com/feMoraes0/media-dashboard',
      tags: ['reactjs', 'typescript', 'dashboard', 'learning', 'eslint', 'frontend-mentor', 'challenge']
    },
    {
      name: 'Pokemon App',
      description: 'Pokemon mobile application built with Flutter.',
      print: 'https://github.com/feMoraes0/project-prints/raw/master/pokemon-app/gif_pokemon.gif',
      url: 'https://github.com/feMoraes0/pokemon-app',
      tags: ['pokemon', 'flutter', 'dart', 'api', 'app', 'mobile']
    },
    {
      name: 'Animated Stack',
      description: 'Stack animation built with React.js',
      print: 'https://github.com/feMoraes0/project-prints/raw/master/animated-stack/animated_stack.gif',
      url: 'https://github.com/feMoraes0/animated-stack',
      tags: ['reactjs', 'animation', 'stack', 'javascript', 'css', 'practise']
    }
  ]
  const [projectId, setProjectId] = useState(0);

  const goPrevious = () => {
    if(projectId - 1 >= 0) {
      setProjectId(projectId - 1)
    }
  }

  const goNext = () => {
    if(projectId + 1 < projects.length) {
      setProjectId(projectId + 1)
    }
  }

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
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <h1>{projects[projectId]['name']}</h1>
            <h3>{projects[projectId]['description']}</h3>
            <div className='tags'>
              {projects[projectId]['tags'].map((tagName) => {
                return <div className='tag'>{tagName}</div>;
              })}
            </div>
            <a
              target='_blank'
              href={projects[projectId]['url']}
              rel="noopener noreferrer"
            >
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  variants={logoGitVariants}
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                />
              </svg>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='carrousel-cards'>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className='card-image'
            key={projectId}
            variants={cardImageVariants}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <img src={projects[projectId]['print']} alt="project"/>
          </motion.div>
        </AnimatePresence>
        <motion.div
          className='controls'
          variants={controlsVariants}
        >
          <button onClick={goPrevious}>
            <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button onClick={goNext}>
            <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <span>{projectId} of {projects.length - 1}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Project;