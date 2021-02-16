import React from 'react';
import FormField from '../../components/form-field';
import { ContactContainer, ContactTitle, Form, Button, ImageBackgroundTop, ImageBackgroundBottom } from './style';
import { hideShowVariants } from '../../global/animation';
import { ImageTopVariants, ImageBottomVariants } from './animation';
import ArmRight from '../../assets/contact-01.png';
import ArmLeft from '../../assets/contact-02.png';

const Contact = () => {
  return (
    <ContactContainer
      variants={hideShowVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ContactTitle>Let's chat!</ContactTitle>
      <Form>
        <FormField label={'Name'} />
        <FormField label={'Contact'} />
        <FormField label={'Message'} textarea={true} />
        <Button type="submit">Send</Button>
      </Form>
      <ImageBackgroundTop variants={ImageTopVariants} src={ArmLeft} />
      <ImageBackgroundBottom variants={ImageBottomVariants} src={ArmRight} />
    </ContactContainer>
  );
};

export default { component: Contact, route: '/contact' };

