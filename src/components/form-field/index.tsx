import React from 'react';
import { Label, Input, TextArea } from './style';

interface FormFieldProps {
  label: string,
  inputType?: string,
  textarea?: boolean
}

const FormField = ({ label, inputType = 'text', textarea = false } : FormFieldProps ) => {
  return (
    <>
      <Label>{label}</Label>
      { !textarea && <Input type={inputType} required /> }
      { textarea && <TextArea rows={4}></TextArea> }
    </>
  );
};

export default FormField;
