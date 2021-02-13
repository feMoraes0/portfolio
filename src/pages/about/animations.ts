
const ImageVariants = {
  initial: {
    y: 10
  },
  animate: {
    y: -10,
    transition: {
      duration: 1,
      yoyo: Infinity,
      ease: 'easeInOut',
    }
  }
};

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
  }
};

export { ImageVariants, SvgVariants, TextVariants };


