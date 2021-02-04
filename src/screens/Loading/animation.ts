const LoadingIconVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      yoyo: Infinity,
    }
  }
};

const LoadingIconLinesVariant = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 1.5,
      yoyo: Infinity,
      ease: 'easeInOut'
    }
  }
}

export { LoadingIconVariant, LoadingIconLinesVariant };