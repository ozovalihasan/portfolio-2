import { styled } from '@linaria/react';
import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import * as color from '../styleSheets/colorVariables';

const Intro = () => (
  <IntroOuter id="intro">
    <IntroImg src={`${process.env.PUBLIC_URL}/assets/intro.jpg`} alt="" />

    <IntroInner>
      <OpaqueBackground />
      <SVG
        viewBox="0 0 210 150"
        preserveAspectRatio="none"
      >
        <g>
          <path
            d="M 1.1708345,-2.4960381 -30.663143,-7.5680199 -19.969839,198.17399 225.85024,150.3891 C -0.09803712,139.83046 10.535889,167.70683 1.1708345,-2.4960381 Z"
          />
        </g>
      </SVG>
      <IntroDescription>
        <IntroTitle>
          Hasan Özovalı
        </IntroTitle>
        <IntroSubtitle>
          Efficient & Effective
        </IntroSubtitle>
        <IntroText>
          Hello, I am a full stack web developer!
          I can help you build a product, feature, or website.
          I am looking for new opportunities.
        </IntroText>
        <OuterSocialLinks>
          <SocialLinks />
        </OuterSocialLinks>
      </IntroDescription>
    </IntroInner>
  </IntroOuter>
);

const IntroOuter = styled.header`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    height: 550px;
  }
`;

const IntroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  position: absolute;
`;

const OpaqueBackground = styled.div`
  background-image: linear-gradient(to left, ${color.firstColor} 0%, ${color.secondColor} 100%);
  opacity: 0.95;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  
`;

const SVG = styled.svg`
  width: 100%;
  height: 550px;
  fill: ${color.fifthColor};
  top: 0;
  left: 0;
  display: none;
  position: absolute;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const IntroInner = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
  

  @media screen and (min-width: 768px) {
    padding: 0 100px 0 15vw;
    min-height: 550px;
  }
`;

const IntroDescription = styled.div`
  color: ${color.fifthColor};
  padding: 0;
  z-index: 1;

  @media screen and (min-width: 768px) {
    position: absolute;
    padding: 50px;
  }
`;

const IntroTitle = styled.h1`
  font-size: 50px;
`;

const IntroSubtitle = styled.h2`
  font-size: 35px;
`;

const IntroText = styled.p`
  padding: 20px 0;
  font-size: 30px;
`;

const OuterSocialLinks = styled.div`
  background-color: ${color.fifthColor};
  color: ${color.firstColor};
  padding: 10px 0;
  border-radius: 5px;
  width: 110%;
  margin: 0 -5%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;

  @media screen and (min-width: 768px) {
    width: 110%;
    margin: 40px -5%;
  }
`;

export default Intro;
