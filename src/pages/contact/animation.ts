
const ImageTopVariants = {
  initial: {
    opacity: 0,
    x: -20
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    x: -20
  }
};

const ImageBottomVariants = {
  initial: {
    opacity: 0,
    x: 20
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.5
    }
  }
};

export { ImageTopVariants, ImageBottomVariants };