import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import React, { useState } from 'react';
import * as color from '../styleSheets/colorVariables';

const contactInput = css`
  outline: none;
  border-radius: 10px;
  border: 1px solid ${color.fourthColor};
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 20px;
  background-color: ${color.fifthColor};
  color: ${color.thirdColor};

  @media screen and (min-width: 768px) {
    margin: 1rem;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const encode = data => Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...{ name, email, message } }),
    })
      .then(() => {
        setFormStatus('Thank you for getting in touch!'); setName('');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(() => setFormStatus('Oops! There was an error trying to send your form. Please try again later.'));
    e.target.style.opacity = 0;
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
      <ContactFormInner>
        <Form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <FormHeader>
            <input type="hidden" name="form-name" value="contact" />
            <LabelsScreenReader for="name" />
            <LeftInput
              type="text"
              placeholder="Full Name*"
              className={contactInput}
              name="name"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <LabelsScreenReader for="email" />
            <RightInput
              type="email"
              placeholder="Email*"
              className={contactInput}
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </FormHeader>
          <LabelsScreenReader for="message" />
          <FormBody
            placeholder="Message*"
            name="message"
            id="message"
            value={message}
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
        {formStatus && <FormStatus>{formStatus}</FormStatus>}
      </ContactFormInner>
    </ContactFormOuter>
  );
};

const ContactFormOuter = styled.div`
  background-color: ${color.fifthColor};

  @media screen and (min-width: 768px) {
    padding: 3rem;
    background-color: transparent;
  }
`;

const ContactFormText = styled.div`
  padding: 2rem;
  padding-bottom: 3rem;
  background-color: ${color.fifthColor};

  @media screen and (min-width: 768px) {
    padding: 0;
    padding-bottom: 3rem;
  }
`;

const ContactFormTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const ContactFormInner = styled.div`
  position: relative;
`;

const Form = styled.form`
  padding: 2rem;
  opacity: 1;

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

const LabelsScreenReader = styled.label`
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
`;

const FormStatus = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${color.secondColor};
  color: ${color.thirdColor};

  @media screen and (min-width: 768px) {
    border-radius: 10px;
  }
`;

export default ContactForm;
