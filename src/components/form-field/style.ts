import styled from 'styled-components';

const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 300;
  letter-spacing: 1.3px;
  color: #F7F7F7;
  margin-left: 10px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 17px 10px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 5px auto 15px;
  color: #F7F7F7;
  font-weight: 300;
`;

const TextArea = styled.textarea`
  width: 100%;
  font-size: 1rem;
  padding: 17px 10px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 5px auto 15px;
  color: #F7F7F7;
  font-weight: 300;
  resize: none;
`;

export { Label, Input, TextArea };