
const InfoContainerVariant = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
  }
};

const InfoImageVariant = {
  initial: {
    opacity: 0,
    x: -25,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    }
  }
};

const InfoTextBoxVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    }
  },
};

const InfoTextVariant = {
  initial: {
    opacity: 0,
    y: -25,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
};

export { InfoContainerVariant, InfoImageVariant, InfoTextBoxVariant, InfoTextVariant };