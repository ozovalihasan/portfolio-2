import ToggleTheme from '../ToggleTheme/ToggleTheme';
import DeveloperImage from "../../assets/hasanozovali.webp"

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
    <nav>
      <div>

        <img
          src={DeveloperImage}
          alt="Developer, Hasan Ozovali"
          height="75"
          width="75"
        />
        
        {navBar.map(oneTab => (
          <a href={oneTab.link} title={oneTab.name} key={oneTab.name} className={oneTab.name === 'Intro' ? "hidden md:block" : ''}>
            {oneTab.name}
          </a>
        ))}
        <ToggleTheme />

      </div>
    </nav>
  );
};

export default NavBar;
