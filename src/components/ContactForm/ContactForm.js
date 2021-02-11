import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import React, { useState } from 'react';
import * as color from '../styleSheets/styleVariables';

const contactInput = css`
  outline: none;
  border-radius: 10px;
  border: 1px solid ${color.fourthColor};
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    margin: 1rem;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const encode = data => Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...{ name, email, message } }),
    })
      // eslint-disable-next-line no-alert
      .then(() => alert('Success!'))
      // eslint-disable-next-line no-alert
      .catch(error => alert(error));

    e.preventDefault();
  };
  return (
    <ContactFormOuter id="contact">
      <ContactFormText>
        <ContactFormTitle>
          Interested in collaborating
        </ContactFormTitle>
        <div>
          As you can see from the above projects, I love coding and producing high-quality work.
          If you like what you see and have a project that you need to be coded,
          I&apos;d love to hear from you.
        </div>
      </ContactFormText>
      <Form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <FormHeader>
          <input type="hidden" name="form-name" value="contact" />
          <LeftInput
            type="text"
            placeholder="Full Name*"
            className={contactInput}
            name="name"
            onChange={e => setName(e.target.value)}
            required
          />
          <RightInput
            type="email"
            placeholder="Email*"
            className={contactInput}
            name="email"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </FormHeader>
        <FormBody
          placeholder="Message*"
          name="message"
          onChange={e => setMessage(e.target.value)}
          className={contactInput}
          required
        />
        <ContactButton
          type="submit"
          name="submit"
        >
          Get in touch
        </ContactButton>
      </Form>
    </ContactFormOuter>
  );
};

const ContactFormOuter = styled.div`
  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
`;

const ContactFormText = styled.div`
  padding-bottom: 3rem;
  padding: 2rem;

  @media screen and (min-width: 768px) {
    padding: 0;
    padding-bottom: 3rem;
  }
`;

const ContactFormTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const Form = styled.form`
  background-color: ${color.firstColor};
  padding: 2rem;

  @media screen and (min-width: 768px) {
    padding: 3rem;
    background-color: transparent;
  }
`;

const FormHeader = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const LeftInput = styled.input`
  @media screen and (min-width: 768px) {
    margin-left: 0; 
  }
`;

const RightInput = styled.input`
  @media screen and (min-width: 768px) {
    margin-right: 0; 
  }
`;

const FormBody = styled.textarea`
  margin-right: 0;
  margin-left: 0;
`;

const ContactButton = styled.button`
  border-radius: 50rem;
  background-color: ${color.secondColor};
  color: ${color.thirdColor};
  padding: 1rem;
  width: 100%;
  border: none;
`;

export default ContactForm;
