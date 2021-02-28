import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngellist, faGithub, faLinkedin, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faFileAlt, faPaperPlane, faSun, faMoon, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { styled } from '@linaria/react';
import React, { useState } from 'react';
import {
  Route, Switch, useLocation,
} from 'react-router-dom';
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
import OneProject from '../OneProject/OneProject';
import ModalOneProject from '../ModalOneProject/ModalOneProject';

library.add(faGithub, faLinkedin, faAngellist,
  faTwitter, faFileAlt, faPaperPlane,
  faSun, faMoon, faTimes);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.theme);

  const toggleTheme = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.theme = updatedTheme;
  };

  const location = useLocation();
  const background = location.state && location.state.background;

  window.onload = () => setLoading(false);

  return (
    <MyContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={{ reset, index }}
      >
        <div className={theme === 'dark' ? color.darkTheme : color.lightTheme}>
          {loading && <Loader />}

          <Switch location={background || location}>
            <Route
              exact
              path="/"
              render={() => (
                <AppOuter>
                  <NavBar />
                  <Main>
                    <Intro />
                    <Projects />
                    <Skills />
                    <ContactFormFooter />
                  </Main>
                </AppOuter>
              )}
            />
            <Route
              path="/project/:id"
              render={() => (
                <OneProject />
              )}
            />
          </Switch>
          {background && <Route path="/project/:id" render={() => <ModalOneProject />} />}
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
