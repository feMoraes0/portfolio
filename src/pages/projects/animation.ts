const imageVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
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

const listVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.3,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    }
  }
}

export { imageVariants, listVariants };