import React from 'react';
import FormField from '../../components/form-field';
import { ContactContainer, ContactTitle, Form, Button } from './style';

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Let's chat!</ContactTitle>
      <Form>
        <FormField label={'Name'} />
        <FormField label={'Contact'} />
        <FormField label={'Message'} textarea={true} />
        <Button type="submit">Send</Button>
      </Form>
    </ContactContainer>
  );
};

export default { component: Contact, route: '/contact' };

