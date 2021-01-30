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
    <nav className="flex-shrink-0">
      {navBar.map(tab => (
        <div key={tab.name}>
          {tab.name}
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
