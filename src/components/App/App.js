import React from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Projects from '../Projects/Projects';
import SocialLinks from '../SocialLinks/SocialLinks';

library.add(fab, fas);
const App = () => (
  <div className="App">
    <Projects />
    <SocialLinks />

  </div>
);

export default App;
