import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faAngellist, faGithub, faLinkedin, faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faFileAlt, faPaperPlane, faSun, faMoon, faTimes, faSearch,
} from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from "react";
import Loader from '../Loader/Loader';
import WakeUp from '../WakeUp/WakeUp';
import { ThemeContext } from '../store';
import NavBar from '../NavBar/NavBar';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import ContactFormFooter from '../ContactFormFooter/ContactFormFooter';


library.add(faGithub, faLinkedin, faAngellist,
  faXTwitter, faFileAlt, faPaperPlane,
  faSun, faMoon, faTimes, faSearch);

const MainPage = () => {
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

    if (document.readyState === "complete") {

      setLoading(false);
      setWakeUp(true);

    } else {

      window.onload = () => {
        setLoading(false);
        setWakeUp(true);
      };

    }
    
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      <div className="w-full text-third bg-first/20">
        {loading && <Loader />}
        {wakeUp && <WakeUp />}

        <div className='md:flex'>
          <div className='md:w-1/5'>
            <NavBar />
          </div>
          
          <main className='scroll-py-16 md:scroll-py-0 md:w-4/5 '>
            <Intro />
            <Projects />
            <Skills />
            <ContactFormFooter />
          </main>
        </div>

        
      </div>
    </ThemeContext.Provider>

  )
}

export default MainPage
