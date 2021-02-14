const hideShowVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    }
  }
};

const containerImageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.5,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    }
  }
};

export { hideShowVariants, containerImageVariants };