import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const pathVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 0.8,
    }
  }
}

const Menu = () => {
  return (
    <div id='menu'>
      <Link to='/'>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={pathVariants}
          initial='initial'
          animate='animate'
          d="M16 18 22 12 16 6"
        />
        <motion.path
          variants={pathVariants}
          initial='initial'
          animate='animate'
          d="M8 6 2 12 8 18"
        />
      </svg>
      </Link>
      <div>
        <Link to='/about'>
          <span>About</span>
        </Link>
        <Link to='/projects'>
          <span>Projects</span>
        </Link>
        <Link to='/contact'>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;