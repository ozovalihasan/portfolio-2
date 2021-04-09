import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngellist, faGithub, faLinkedin, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faFileAlt, faPaperPlane, faSun, faMoon, faTimes, faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { styled } from '@linaria/react';
import React, { useState } from 'react';
import ContactFormFooter from '../ContactFormFooter/ContactFormFooter';
import Intro from '../Intro/Intro';
import Loader from '../Loader/Loader';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import { MyContext } from '../store';
import * as color from '../styleSheets/colorVariables';
import reset from '../styleSheets/reset';
import index from '../styleSheets/index';
import WakeUp from '../WakeUp/WakeUp';

library.add(faGithub, faLinkedin, faAngellist,
  faTwitter, faFileAlt, faPaperPlane,
  faSun, faMoon, faTimes, faSearch);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [wakeUp, setWakeUp] = useState(false);
  const [theme, setTheme] = useState(localStorage.theme);

  const toggleTheme = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.theme = updatedTheme;
  };

  window.onload = () => {
    setLoading(false);
    setWakeUp(true);
  };

  return (
    <MyContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={{ reset, index }}
      >
        <div className={theme === 'dark' ? color.darkTheme : color.lightTheme}>
          {loading && <Loader />}
          {wakeUp && <WakeUp />}
          <AppOuter>
            <NavBar />
            <Main>
              <Intro />
              <Projects />
              <Skills />
              <ContactFormFooter />
            </Main>
          </AppOuter>
        </div>
      </div>
    </MyContext.Provider>
  );
};

const AppOuter = styled.div`
  display: flex;
  color: ${color.thirdColor};
  overflow-y: scroll;
  scrollbar-color: ${color.secondColor} ${color.firstColor};
  scroll-padding-top: 50.5px;
  height: 100vh;

  @media screen and (min-width: 768px) {
    scroll-padding-top: 0;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background: ${color.firstColor};
  }

  &::-webkit-scrollbar-thumb {
    background: ${color.secondColor};
  }

`;

const Main = styled.main`
  width: 100%;
  padding-top: 50.5px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
`;

export default App;
