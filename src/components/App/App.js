import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@linaria/react';
import React from 'react';
import ContactFormFooter from '../ContactFormFooter/ContactFormFooter';
import Intro from '../Intro/Intro';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import reset from '../styleSheets/reset';
import index from '../styleSheets/index';
import Skills from '../Skills/Skills';

library.add(fab, fas);

const App = () => (
  <div className={reset}>
    <AppOuter className={index}>
      <NavBar />
      <Main>
        <Intro />
        <Projects />
        <Skills />
        <ContactFormFooter />
      </Main>
    </AppOuter>
  </div>
);

const AppOuter = styled.div`
  display:flex;
`;

const Main = styled.div`
  width: 100%;
  padding-top: 155px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }  
`;

export default App;
