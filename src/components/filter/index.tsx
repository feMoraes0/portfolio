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
  'Python'
];

const Filter = () => {
  const currentLanguage = 'All';

  return (
    <FilterBox variants ={FilterBoxVariant} initial='initial' animate='animate'>
      {
        languages.map((language: string) => (
          <FilterItem
            variants={FilterItemVariant}
            className={ language === currentLanguage ? 'active' : '' }
          >
            {language}
          </FilterItem>
        ))
      }
    </FilterBox>
  );
};

export default Filter;