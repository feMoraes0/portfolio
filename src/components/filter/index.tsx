import React from 'react';
import { FilterBox, FilterItem } from './style';

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
    <FilterBox>
      {
        languages.map((language: string) => (
          <FilterItem className={ language === currentLanguage ? 'active' : '' } >{language}</FilterItem>
        ))
      }
    </FilterBox>
  );
};

export default Filter;