import { FormEvent, useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement> ) => {
    const myForm = e.target;
    const formData = new FormData(myForm as HTMLFormElement);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
      .then(() => {
        setFormStatus('Thank you for getting in touch!'); setName('');
        setName('');
        setEmail('');
        setMessage('');

      })
      .catch(() => setFormStatus('Oops! There was an error trying to send your form. Please try again later.'));

    if (e.target && (e.target as HTMLFormElement).style) {
      (e.target as HTMLFormElement).style.opacity = "0";
    }
    e.preventDefault();
  };
  return (
    <div id="contact">
      <div>
        <div>
          Interested in collaborating
        </div>
        <div>
          As you can see from the above projects, I love coding and producing high-quality work.
          If you like what you see and have a project that you need to be coded,
          I&apos;d love to hear from you.
        </div>
      </div>
      <div>
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <div>
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name" />
            <input
              type="text"
              placeholder="Full Name*"
              name="name"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <label htmlFor="email" />
            <input
              type="email"
              placeholder="Email*"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <label htmlFor="message" />
          <textarea
            placeholder="Message*"
            name="message"
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />

          <input type="submit" value="Get in touch"/>
        </form>
        {formStatus && <div>{formStatus}</div>}
      </div>
    </div>
  );
};

export default ContactForm;
