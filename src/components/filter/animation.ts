
const FilterBoxVariant = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const FilterItemVariant = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
    }
  }
};

export { FilterBoxVariant, FilterItemVariant };