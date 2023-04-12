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
    <nav className="bg-fifth w-full fixed md:static z-10 text-third p-4 md:pt-0 md:h-full border-solid border-b border-first">
      <div className='flex md:flex-col items-center gap-4 justify-between md:sticky md:top-0 md:pt-8'>
        <img
          src={DeveloperImage}
          alt="Developer, Hasan Ozovali"
          className="h-8 w-8 md:w-16 md:h-16 rounded-full "
        />
        
        {navBar.map(oneTab => (
          <a href={oneTab.link} title={oneTab.name} key={oneTab.name} className={`text-center ${oneTab.name === 'Intro' ? 'hidden md:block' : 'block'}`}>
            {oneTab.name}
          </a>
        ))}
        <ToggleTheme />
      </div>
    </nav>
  );
};

export default NavBar;
