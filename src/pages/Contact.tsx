import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id='contact'>
      <form action="">
        <fieldset>
          <label htmlFor="name_input">Name</label>
          <input id='name_input' type="text" required/>
        </fieldset>
        <fieldset>
          <label htmlFor="email_input">E-mail</label>
          <input id='email_input' type="text" required/>
        </fieldset>
        <fieldset>
          <label htmlFor="message_input">Message</label>
          <textarea id='message_input' rows={10}></textarea>
        </fieldset>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default Contact;