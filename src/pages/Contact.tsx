import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const formVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    }
  }
}

const fieldsetVariants = {
  initial: {
    x: '100vw',
  },
  animate: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
    }
  }
}

const divisionVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      duration: 1
    }
  }
}

const svgVariants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: {
      duration: 1.5,
    }
  }
}

const Contact = () => {
  return (
    <div id='contact'>
      <motion.form variants={formVariants} initial='initial' animate='animate' action="">
        <motion.fieldset variants={fieldsetVariants}>
          <label htmlFor="name_input">Name</label>
          <input id='name_input' type="text" required/>
        </motion.fieldset>
        <motion.fieldset variants={fieldsetVariants}>
          <label htmlFor="email_input">E-mail</label>
          <input id='email_input' type="text" required/>
        </motion.fieldset>
        <motion.fieldset variants={fieldsetVariants}>
          <label htmlFor="message_input">Message</label>
          <textarea id='message_input' rows={6}></textarea>
        </motion.fieldset>
        <motion.button variants={fieldsetVariants} type='submit'>Send</motion.button>
      </motion.form>
      <motion.div variants={divisionVariants} initial='initial' animate='animate' className='division'>
        <div className='divider' />
        <p>or</p>
        <div className='divider' />
      </motion.div>
      <div className="social">
        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <motion.path variants={svgVariants} initial='initial' animate='animate' d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <motion.path variants={svgVariants} initial='initial' animate='animate' d="M 2 9 H 6 V 21 H 2 L 2 9" />
          <motion.path variants={svgVariants} initial='initial' animate='animate' d="M2,4a2,2 0 1,0 4,0a2,2 0 1,0 -4,0" />
        </svg>
        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <motion.path variants={svgVariants} initial='initial' animate='animate' d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <motion.path variants={svgVariants} initial='initial' animate='animate' d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4" />
          <motion.path variants={svgVariants} initial='initial' animate='animate' d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
        </svg>
      </div>
    </div>
  );
}

export default Contact;