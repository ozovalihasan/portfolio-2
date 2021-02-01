import { createContext } from 'react';

const initialState = {
  projects: [
    {
      name: 'Dr. Ti',
      projectImage: 'project0.png',
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
      name: 'Whistle',
      projectImage: 'project1.jpg',
      usedLanguages: [
        'HTML/CSS',
        'Ruby',
        'Ruby on Rails',
      ],
      liveLink: 'https://whiistle.herokuapp.com/',
      sourceLink: 'https://github.com/ozovalihasan/whistle#readme',
    },
    {
      name: 'Slack Tic-tac-toe Bot',
      projectImage: 'project2.jpg',
      usedLanguages: [
        'Ruby',
        'Slack API',
      ],
      liveLink: '',
      sourceLink: 'https://github.com/ozovalihasan/slack-tictactoe-bot#readme',
    },
    {
      name: 'Airshow',
      projectImage: 'project3.jpg',
      usedLanguages: [
        'HTML',
        'CSS',
        'Bootstrap',
      ],
      liveLink: 'https://airshow.ozovalihasan.com/',
      sourceLink: 'https://github.com/ozovalihasan/capstoneHtmlCss#readme',
    },
    {
      name: 'Escape',
      projectImage: 'project4.jpg',
      usedLanguages: [
        'JavaScript',
        'Phaser',
      ],
      liveLink: 'https://escape.ozovalihasan.com/',
      sourceLink: 'https://github.com/ozovalihasan/escape-rpg-game#readme',
    },
    {
      name: 'BookStore CMS',
      projectImage: 'project5.png',
      usedLanguages: [
        'React',
        'Redux',
        'Ruby on Rails',
      ],
      liveLink: 'https://bookstore.ozovalihasan.com/',
      sourceLink: 'https://github.com/ozovalihasan/bookstore',
    },
  ],
  skills: {
    languages: [
      'JavaScript',
      'Ruby',
      'HTML',
      'CSS',
    ],
    frameworks: [
      'Bootstrap',
      'Sass',
      'Ruby on Rails',
      'RSpec',
      'Phaser',
      'React',
      'Redux/Redux Toolkit',
    ],
    skills: [
      'GitFlow',
      'Github',
      'Remote working',
      'Teamwork',
    ],
  },
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

export default store;
