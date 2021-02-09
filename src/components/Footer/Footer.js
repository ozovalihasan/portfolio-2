import React from 'react';
import { styled } from '@linaria/react';
import * as color from '../styleSheets/styleVariables';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => (
  <FooterOuter>
    ozovalihasan@gmail.com
    <UpdatedSocialLinks>
      <SocialLinks hoverColor={color.thirdColor} />
    </UpdatedSocialLinks>

    <FooterDesigner>
      © Hasan Özovalı
    </FooterDesigner>
    <FooterRight>
      2020 Design inspired by Microverse
    </FooterRight>
  </FooterOuter>
);

const FooterOuter = styled.div`
  text-align: center;
  background-color: ${color.firstColor};

  @media screen and (min-width: 768px) {
    background-color: transparent;
  }
`;

const UpdatedSocialLinks = styled.div`
    color: ${color.fifthColor}
    display: flex;
    justify-content: center;
`;
const FooterDesigner = styled.div`
  border-top: 1px solid ${color.secondColor};
  padding: 10px;
`;

const FooterRight = styled.div`
  padding: 10px;
  padding-top: 0;
`;

export default Footer;
