import { createContext } from 'react';

const initialState = {
  projects: [
    {
      id: 0,
      name: 'EAD',
      description: 'EAD(Entity Association Diagram) is a tool to make a development process of a Rails Project easier and faster. It contains two parts; user interface and a gem. Defined associations can be implemented to a Rails project in a second by using the gem.',
      projectImage: 'EAD-portfolio.webp',
      usedLanguages: [
        'React',
        'TypeScript',
        'Zustand',
        'Tailwind CSS',
        'Ruby',
        'Vite',
      ],
      liveLink: 'https://ead.ozovalihasan.com/',
      sourceLink: 'https://github.com/ozovalihasan/ead/#readme',
    },
    {
      id: 1,
      name: 'Dr. Ti',
      description: 'Did you do ...? Don\'t remember, Track It (Dr. Ti) is a mobile application. Any user may create an item to track and add piece to check.',
      projectImage: 'project0.webp',
      usedLanguages: [
        'React',
        'Redux Toolkit',
        'Chart.js',
        'Ruby on Rails',
      ],
      liveLink: 'https://dr-ti.ozovalihasan.com/',
      sourceLink: 'https://github.com/ozovalihasan/track',
    },
    {
      id: 2,
      name: 'Whistle',
      description: 'Whistle is a social networking website for divers. It is built by using Ruby on Rails and deployed to Heroku.',
      projectImage: 'project1.webp',
      usedLanguages: [
        'HTML/CSS',
        'Ruby',
        'Ruby on Rails',
      ],
      liveLink: 'https://whiistle.herokuapp.com/',
      sourceLink: 'https://github.com/ozovalihasan/whistle#readme',
    },
    {
      id: 3,
      name: 'Slack Tic-tac-toe Bot',
      description: 'A bot to play tic-tac-toe game on Slack is developed. ',
      projectImage: 'project2.webp',
      usedLanguages: [
        'Ruby',
        'Slack API',
      ],
      liveLink: '',
      sourceLink: 'https://github.com/ozovalihasan/slack-tictactoe-bot#readme',
    },
    {
      id: 4,
      name: 'Escape',
      description: 'Turn-based RPG game "Escape". Escaping from island isn\'t easy.',
      projectImage: 'project4.webp',
      usedLanguages: [
        'JavaScript',
        'Phaser 3',
      ],
      liveLink: 'https://escape.ozovalihasan.com/',
      sourceLink: 'https://github.com/ozovalihasan/escape-rpg-game#readme',
    },
    {
      id: 5,
      name: 'BookStore CMS',
      description: 'A bookstore content management system is a program to track the situation of books.',
      projectImage: 'project5.webp',
      usedLanguages: [
        'React',
        'Redux',
        'Ruby on Rails',
      ],
      liveLink: 'https://bookstore.ozovalihasan.com/',
      sourceLink: 'https://github.com/ozovalihasan/bookstore',
    },
  ],
  skills: [
    {
      name: 'Languages',
      items: [
        'JavaScript',
        'Ruby',
        'HTML',
        'CSS',
      ],
    },

    {
      name: 'Frameworks',
      items: [
        'Ruby on Rails',
        'React',
        'RSpec',
        'Jest',
        'TypeScript',
        'Tailwind CSS',
        'Bootstrap',
        'Sass',
        'Phaser 3',
        'Redux/Redux Toolkit',
      ],
    },
    {
      name: 'Skills',
      items: [
        'GitFlow',
        'Github',
        'Remote working',
        'Remote pair programming',
        'Teamwork',
        'Babel',
        'Webpack',
      ],
    },
  ],
  socialLinks: [
    {
      name: 'Github',
      link: 'https://github.com/ozovalihasan',
      icon: ['fab', 'github'],
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/hasan-ozovali/',
      icon: ['fab', 'linkedin'],
    },
    {
      name: 'Angellist',
      link: 'https://angel.co/u/hasan-ozovali',
      icon: ['fab', 'angellist'],
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/ozovalihasan',
      icon: ['fab', 'twitter'],
    },
    {
      name: 'Resume',
      link: 'https://drive.google.com/file/d/153IJHzt8K-sMMl_U3C36bQC4QUxd7gDP/view?usp=sharing',
      icon: ['fas', 'file-alt'],
    },
  ],
};
const store = createContext(initialState);

export type ThemeContextType = { theme: 'light' | "dark", toggleTheme: () => void }

const ThemeContext = createContext<ThemeContextType | null>( null );

export default store;
export { ThemeContext };
