import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => (
  <footer className='text-center pt-4'>
    <div className='py-4'>
      ozovalihasan@gmail.com
    </div>

    <SocialLinks />

    <div className='w-full border-solid border-fifth border-t-2 mt-8 pt-2'>
      © Hasan Özovalı
    </div>
    <div>
      2023 Design inspired by Microverse
    </div>
  </footer>
);

export default Footer;
