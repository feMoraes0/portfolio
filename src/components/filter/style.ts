import styled from 'styled-components';

const FilterBox = styled.div`
  width: 100%;
  padding-bottom: 1vh;
  border-bottom: 1px solid #efefef;
  text-align: center;
`;

const FilterItem = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 300;
  padding: 0px 12px;
  margin-right: 5px;
  font-size: 1.125rem;
  color: #aaa;
  cursor: pointer;

  &.active {
    color: #222;
  }

  &:hover {
    color: #222;
  }
`;

export { FilterBox, FilterItem };