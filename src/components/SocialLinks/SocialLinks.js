import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@linaria/react';
import PropTypes from 'prop-types';
import store from '../store';

const SocialLinks = ({ hoverColor }) => {
  const { socialLinks } = useContext(store);
  return (
    <SocialLinksOuter>
      {socialLinks.map(socialLink => (
        <Link target="blank" title={socialLink.name} href={socialLink.link} key={socialLink.name} hoverColor={hoverColor}>
          <UpdatedFontAwesomeIcon icon={socialLink.icon} />
        </Link>
      ))}
    </SocialLinksOuter>
  );
};

const SocialLinksOuter = styled.div`
  display: flex;
`;

const Link = styled.a`
  transition: color 0.5s;
  
  &:hover {
    color: ${props => props.hoverColor}
  }
`;

const UpdatedFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  margin: 10px;
  
`;

SocialLinks.propTypes = {
  hoverColor: PropTypes.string.isRequired,
};
export default SocialLinks;
