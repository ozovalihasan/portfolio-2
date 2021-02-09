import React from 'react';
import { styled } from '@linaria/react';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import * as color from '../styleSheets/styleVariables';

const ContactFormFooter = () => (
  <Outer>
    <SVG
      viewBox="0 0 210 120"
      preserveAspectRatio="none"
    >
      <g>
        <path
          d="M 11.950289,96.239291 C 3.349073,131.64137 1.1708345,154.58 1.1708345,154.58 L -18.295167,-36.866427 227.3519,-22.83499 226.40392,31.941824 c 0,0 -104.32502,4.63077 -155.11467,7.53869 -50.789659,2.90793 -50.737745,21.356701 -59.338961,56.758777 z"
        />
      </g>
    </SVG>
    <ContactForm />
    <Footer />
  </Outer>
);

const Outer = styled.div`
  position: relative;
  

`;
const SVG = styled.svg`
  background-color: ${color.firstColor};
  position: absolute;
  width: 100%;
  height: 100%;
  fill: ${color.fifthColor};
  top: 0;
  left: 0;
  z-index: -1;
  display: none;
  
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export default ContactFormFooter;
