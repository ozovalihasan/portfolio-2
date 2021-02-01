import { styled } from '@linaria/react';
import React from 'react';

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

  return (
    <div>
      <DeveloperImage src="assets/hasanozovali.jpg" />
      {navBar.map(oneTab => (
        <div key={oneTab.name}>
          <a href={oneTab.link} title={oneTab.name}>
            {oneTab.name}
          </a>
        </div>
      ))}

    </div>
  );
};

const DeveloperImage = styled.img`
  background-size: cover;
  width: 50px;
  height: 50px; 
`;

export default NavBar;
