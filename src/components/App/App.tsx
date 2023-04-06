import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faAngellist, faGithub, faLinkedin, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faFileAlt, faPaperPlane, faSun, faMoon, faTimes, faSearch,
} from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from "react";
import Loader from '../Loader/Loader';
import WakeUp from '../WakeUp/WakeUp';
import { ThemeContext } from '../store';
import ToggleTheme from "../ToggleTheme/ToggleTheme";


library.add(faGithub, faLinkedin, faAngellist,
  faTwitter, faFileAlt, faPaperPlane,
  faSun, faMoon, faTimes, faSearch);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [wakeUp, setWakeUp] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(localStorage.theme);

  const toggleTheme = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';

    if (updatedTheme === "light") {
      document.querySelector(':root')?.classList.remove("dark")
    } else {
      document.querySelector(':root')?.classList.add("dark")
    }
    
    setTheme(updatedTheme);
    localStorage.theme = updatedTheme;
  };

  useEffect(() => {   
    if (theme === "light") {
      document.querySelector(':root')?.classList.remove("dark")
    } else {
      document.querySelector(':root')?.classList.add("dark")
    }
  }, []);

  window.onload = () => {
    setLoading(false);
    setWakeUp(true);
  };


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      <div className="bg-first h-screen w-full">
        {loading && <Loader />}
        {wakeUp && <WakeUp />}

        <ToggleTheme></ToggleTheme>
      </div>
    </ThemeContext.Provider>

  )
}

export default App
