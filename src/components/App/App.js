import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngellist, faGithub, faLinkedin, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faFileAlt, faPaperPlane, faSun, faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { styled } from '@linaria/react';
import React, { useState, lazy, Suspense } from 'react';
import { MyContext } from '../store';
import Loader from '../Loader/Loader';
import * as color from '../styleSheets/colorVariables';
import reset from '../styleSheets/reset';
import index from '../styleSheets/index';

const ContactFormFooter = lazy(() => import('../ContactFormFooter/ContactFormFooter'));
const Intro = lazy(() => import('../Intro/Intro'));
const NavBar = lazy(() => import('../NavBar/NavBar'));
const Projects = lazy(() => import('../Projects/Projects'));
const Skills = lazy(() => import('../Skills/Skills'));

library.add(faGithub, faLinkedin, faAngellist, faTwitter, faFileAlt, faPaperPlane, faSun, faMoon);

const App = () => {
  const [theme, setTheme] = useState(localStorage.theme);

  const toggleTheme = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.theme = updatedTheme;
  };

  return (
    <MyContext.Provider value={{ theme, toggleTheme }}>
      <div className={{ reset, index }}>
        <div className={theme === 'dark' ? color.darkTheme : color.lightTheme}>
          <Suspense fallback={Loader()}>
            <AppOuter>
              <NavBar />
              <Main>
                <Intro />
                <Projects />
                <Skills />
                <ContactFormFooter />
              </Main>
            </AppOuter>
          </Suspense>
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
  scroll-padding-top: 51.5px;
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

const Main = styled.div`
  width: 100%;
  padding-top: 51.5px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
`;

export default App;
