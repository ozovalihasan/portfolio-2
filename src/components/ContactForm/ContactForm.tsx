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
    <div id="contact" className='bg-transparent'>
      <div>
        <div className='font-bold text-lg'>
          Interested in collaborating
        </div>
        <div>
          As you can see from the above projects, I love coding and producing high-quality work.
          If you like what you see and have a project that you need to be coded,
          I&apos;d love to hear from you.
        </div>
      </div>
      <div className='p-4 py-8'>
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          
          <div className='grid grid-cols-2 gap-4 py-4'>
            <div className='' >
              <label htmlFor="name" />
              <input
                className=' custom-input'
                type="text"
                placeholder="Full Name*"
                name="name"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email" />
              <input
                className=' custom-input'
                type="email"
                placeholder="Email*"
                name="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <label htmlFor="message" />
          <textarea
            className='custom-input'
            placeholder="Message*"
            name="message"
            rows={5}
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
          
          <div className='w-full '>
            <input type="submit" value="Get in touch" className='text-fifth bg-first rounded-xl p-4 mt-4 border border-solid border-fifth w-full dark:brightness-200 brightness-110 cursor-pointer'/>
          </div>
        </form>
        {formStatus && <div>{formStatus}</div>}
      </div>
    </div>
  );
};

export default ContactForm;
