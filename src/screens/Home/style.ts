import styled from 'styled-components';

interface GlobalContainerProps {
  isVisible: boolean
}

const GlobalContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0px 20vw;
  display: ${(props: GlobalContainerProps) => props.isVisible ? '' : 'none'};
`;

export { GlobalContainer };