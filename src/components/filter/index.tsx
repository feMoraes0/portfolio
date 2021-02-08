import React from 'react';
import { FilterBox, FilterItem } from './style';
import { FilterBoxVariant, FilterItemVariant } from './animation';

const languages: Array<string> = [
  'All',
  'TypeScript',
  'PHP',
  'JavaScript',
  'Vue',
  'HTML',
  'Java',
  'Dart',
  'Python',
  'Ruby',
];

interface FilterProps {
  onUpdate: Function,
  currentFilter: string,
};

const Filter = ({ onUpdate, currentFilter }: FilterProps ) => {
  return (
    <FilterBox variants ={FilterBoxVariant} initial='initial' animate='animate'>
      {
        languages.map((language: string) => (
          <FilterItem
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