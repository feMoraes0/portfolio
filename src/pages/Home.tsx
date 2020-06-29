import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

const homeVariants = {
  initial: { opacity: 0 },
  animate: {opacity: 1 },
  exit: { opacity: 0 }
}

const foregroundVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.02,
    }
  }
}

const foregroundLetterVariants = {
  initial: {
    y: '100vh',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    }
  }
}

const backgroundVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      staggerDirection: 1,
    }
  }
}

const backgroundWordVariants = {
  initial: { y: '-100vh' },
  animate: {
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}

const Home = () => {
  return (
    <motion.div
      id='home'
      variants={homeVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <motion.div
        className="section background"
        variants={backgroundVariants}
      >
        <motion.span variants={backgroundWordVariants}>NODEJS</motion.span>
        <motion.span variants={backgroundWordVariants}>REACTJS</motion.span>
        <motion.span variants={backgroundWordVariants}>FLUTTER</motion.span>
      </motion.div>
      <motion.div
        className="section foreground"
        variants={foregroundVariants}
      >
        <div className='word'>
          <motion.div
            variants={foregroundLetterVariants}
          >F</motion.div>
          <motion.div variants={foregroundLetterVariants}>e</motion.div>
          <motion.div variants={foregroundLetterVariants}>r</motion.div>
          <motion.div variants={foregroundLetterVariants}>n</motion.div>
          <motion.div variants={foregroundLetterVariants}>a</motion.div>
          <motion.div variants={foregroundLetterVariants}>n</motion.div>
          <motion.div variants={foregroundLetterVariants}>d</motion.div>
          <motion.div variants={foregroundLetterVariants}>o</motion.div>
        </div>
        <div className='word'>
          <motion.div variants={foregroundLetterVariants}>M</motion.div>
          <motion.div variants={foregroundLetterVariants}>o</motion.div>
          <motion.div variants={foregroundLetterVariants}>r</motion.div>
          <motion.div variants={foregroundLetterVariants}>a</motion.div>
          <motion.div variants={foregroundLetterVariants}>e</motion.div>
          <motion.div variants={foregroundLetterVariants}>s</motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;