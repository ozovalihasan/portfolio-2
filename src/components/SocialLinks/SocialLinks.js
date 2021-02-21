import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@linaria/react';
import store from '../store';
import * as color from '../styleSheets/colorVariables';

const SocialLinks = () => {
  const { socialLinks } = useContext(store);
  return (
    <SocialLinksOuter>
      {socialLinks.map(socialLink => (
        <Link target="blank" title={socialLink.name} href={socialLink.link} key={socialLink.name}>
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
    color: ${color.thirdColor};
  }
`;

const UpdatedFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  margin: 10px;

`;

export default SocialLinks;
