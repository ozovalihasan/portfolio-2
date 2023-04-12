import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';

const ContactFormFooter = () => (
  <div id="contact" className='relative p-16 bg-third md:bg-transparent text-fifth'>
    <svg
      viewBox="0 0 210 120"
      preserveAspectRatio="none"
      className="hidden md:block fill-fifth bg-third w-full h-full absolute top-0 left-0 -z-10"
    >
      <g>
        <path
          d="M 11.950289,96.239291 C 3.349073,131.64137 1.1708345,154.58 1.1708345,154.58 L -18.295167,-36.866427 227.3519,-22.83499 226.40392,31.941824 c 0,0 -104.32502,4.63077 -155.11467,7.53869 -50.789659,2.90793 -50.737745,21.356701 -59.338961,56.758777 z"
        />
      </g>
    </svg>
    <ContactForm />
    <Footer />
  </div>
);

export default ContactFormFooter;
