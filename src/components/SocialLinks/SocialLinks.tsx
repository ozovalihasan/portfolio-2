import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import store from '../store';


const SocialLinks = () => {
  const { socialLinks } = useContext(store);
  return (
    <div className='p-2 w-full flex item-center justify-between  bg-fifth px-3 rounded-full'>
      {socialLinks.map(socialLink => (
        <a className='w-full transition-colors text-third hover:text-first m-3 text-3xl text-center' target="blank" title={socialLink.name} href={socialLink.link} key={socialLink.name}>
          <FontAwesomeIcon icon={socialLink.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
