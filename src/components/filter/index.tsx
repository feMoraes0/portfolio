import React from 'react';
import { FilterBox, FilterItem } from './style';
import { FilterBoxVariant, FilterItemVariant } from './animation';

interface FilterProps {
  options: Array<string>,
  onUpdate: Function,
  currentFilter: string,
};

const Filter = ({ options,  onUpdate, currentFilter }: FilterProps ) => {
  return (
    <FilterBox variants ={FilterBoxVariant} initial='initial' animate='animate'>
      {
        options.map((language: string, index: number) => (
          <FilterItem
            key={index}
            variants={FilterItemVariant}
            className={ language === currentFilter ? 'active' : '' }
            onClick={() => onUpdate(language)}
          >
            {language}
          </FilterItem>
        ))
      }
    </FilterBox>
  );
};

export default Filter;