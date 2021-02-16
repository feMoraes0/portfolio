import styled from 'styled-components';
import { PageScaffoldContainer } from '../../global/style';

const ContactContainer = styled(PageScaffoldContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #F7F7F7;
  font-weight: 400;
  letter-spacing: 1.3px;
`;

const Form = styled.form`
  width: 30vw;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Button = styled.button`
  width: 100%;
  font-size: 1rem;
  padding: 17px 10px;
  border: none;
  background-color: transparent;
  border-radius: 10px;
  margin: 5px auto 15px;
  color: #F7F7F7;
  font-weight: 300;
  cursor: pointer;
`;

export { ContactContainer, ContactTitle, Form, Button };