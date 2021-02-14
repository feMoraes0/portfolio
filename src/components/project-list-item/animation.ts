const itemVariants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 1,
    }
  }
};

export { itemVariants };