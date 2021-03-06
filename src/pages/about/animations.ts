const ImageVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  animate: {
    opacity: 1,
    y: -10,
    transition: {
      y: {
        duration: 1,
        yoyo: Infinity,
        ease: 'easeInOut',
      }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    }
  }
};

const TextVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    }
  }
};

export { ImageVariants, TextVariants };


