import styled from 'styled-components';


const Container = styled.div`
  margin: 30px 0px;
  column-count: 4;
  column-gap: 10px;
`;

const GridBox = styled.div`
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
`;

const Image = styled.img`
  width: 100%;
  grid-row: 1 / -1;
  grid-column: 1;
`;

export { Container, GridBox, Image };