
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
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2
    }
  }
}

export { ImageVariants, SvgVariants };


