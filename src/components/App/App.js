import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub, faLinkedin, faAngellist, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@linaria/react';
import React, { useState } from 'react';
import ContactFormFooter from '../ContactFormFooter/ContactFormFooter';
import Intro from '../Intro/Intro';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import reset from '../styleSheets/reset';
import index from '../styleSheets/index';
import Skills from '../Skills/Skills';
import Loader from '../Loader/Loader';

library.add(faGithub, faLinkedin, faAngellist, faTwitter, faFileAlt, faPaperPlane);

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className={reset} onLoad={() => { setLoading(false); }}>
      {loading && <Loader />}
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
};

const AppOuter = styled.div`
  display: flex;
`;

const Main = styled.div`
  width: 100%;
  padding-top: 115px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
`;

export default App;
