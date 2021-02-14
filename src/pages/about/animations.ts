
const containerVariants = {
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
  },
};

const backgroundVariants = {
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
  end: {
    opacity: 0,
  }
};

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

export { containerVariants, backgroundVariants, ImageVariants, TextVariants };


