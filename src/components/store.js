import { createContext } from 'react';

const initialState = {
  projects: [
    {
      name: 'Dr. Ti',
      projectImage: 'assets/project0.png',
      usedLanguages: [
        'React',
        'Redux Toolkit',
        'Chart.js',
        'Ruby on Rails',
      ],
      liveLink: 'https://dr-ti.ozovalihasan.com/',
      sourceLink: 'https://github.com/ozovalihasan/track',
    },
  ],
};
const store = createContext(initialState);

export default store;
