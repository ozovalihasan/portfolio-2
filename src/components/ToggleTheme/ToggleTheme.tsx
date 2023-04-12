import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../store';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <button className='w-16 md:w-full text-third hover:text-first transition-colors' name="toggle-theme" type="button" onClick={toggleTheme} aria-label="toggle-theme">
      <FontAwesomeIcon icon={theme === 'dark' ? ['fas','sun'] : ['fas','moon']} className="fa-lg " />
    </button>
  );
};



export default ToggleTheme;
