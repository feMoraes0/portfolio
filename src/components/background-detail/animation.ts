const SvgVariants = {
  initial: {
    opacity: 0,
    scale: 0,
    x: '25%',
    y: '25%',
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.5,
    }
  },
  exit: {
    opacity: 0,
    scale: 0,
    x: '25%',
    y: '25%',
    transition: {
      duration: 0.5,
    }
  }
};

export { SvgVariants };