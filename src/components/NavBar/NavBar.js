import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import React from 'react';
import * as color from '../styleSheets/colorVariables';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const NavBar = () => {
  const navBar = [
    {
      name: 'Intro',
      link: '#intro',
    },
    {
      name: 'Portfolio',
      link: '#portfolio',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];

  const hideForMobile = css`
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
`;

  return (
    <NavBarOuter>
      <NavBarInner>

        <DeveloperImage src="assets/hasanozovali.webp" />
        {navBar.map(oneTab => (
          <NavBarItem href={oneTab.link} title={oneTab.name} key={oneTab.name} className={oneTab.name === 'Intro' ? hideForMobile : ''}>
            {oneTab.name}
          </NavBarItem>
        ))}
        <ToggleTheme />

      </NavBarInner>
    </NavBarOuter>
  );
};

const NavBarOuter = styled.div`
  flex-shrink: 0;
  width: 100%;
  position: fixed;
  z-index: 10;
  box-shadow: 0 0 10px ${color.fourthColor};

  @media screen and (min-width: 768px) {
    position: static;
    width: 20%;
    box-shadow: none;
  }
`;

const NavBarInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background-color: ${color.fifthColor};
  
  @media screen and (min-width: 768px) {
    padding: 20px;
    height: 100%;
    position: fixed;
    width: 20%;
    flex-direction: column;
    justify-content: start;
  }
`;

const DeveloperImage = styled.img`
  background-size: cover;
  width: 35px;
  border-radius: 50rem;
  margin: 0 20px;

  @media screen and (min-width: 768px) {
    width: 75px;
    margin: 20px;
  }
`;

const NavBarItem = styled.a`
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 10px;
  color: ${color.thirdColor};
  border-radius: 50rem;

  &:hover {
    background-color: ${color.sixthColor};
  }

  @media screen and (min-width: 768px) {
    margin: 10px;
  }
`;

export default NavBar;
