import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import store from '../store';

const SocialLinks = () => {
  const { socialLinks } = useContext(store);
  return (
    <div>
      {socialLinks.map(socialLink => (
        <div key={socialLink.name}>
          {socialLink.name}
          <div>
            <FontAwesomeIcon icon={socialLink.icon} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
