import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import store from '../store';


const SocialLinks = () => {
  const { socialLinks } = useContext(store);
  return (
    <div>
      {socialLinks.map(socialLink => (
        <a target="blank" title={socialLink.name} href={socialLink.link} key={socialLink.name}>
          <FontAwesomeIcon icon={socialLink.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
