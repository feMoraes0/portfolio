const imageVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.75,
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

const cardBoxVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    }
  },
  exit: {
    opacity: 0,
  }
};

const cardVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  },
  exit: {
    opacity: 0
  }
};

const cardTextVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  },
  exit: {
    opacity: 0
  }
}

export { imageVariants, cardBoxVariants, cardVariants, cardTextVariants };