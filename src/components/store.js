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
    {
      name: 'Whistle',
      projectImage: 'assets/project1.jpg',
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
      projectImage: 'assets/project2.jpg',
      usedLanguages: [
        'Ruby',
        'Slack API',
      ],
      liveLink: '',
      sourceLink: 'https://github.com/ozovalihasan/slack-tictactoe-bot#readme',
    },
    {
      name: 'Airshow',
      projectImage: 'assets/project3.jpg',
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
      projectImage: 'assets/project4.jpg',
      usedLanguages: [
        'JavaScript',
        'Phaser',
      ],
      liveLink: 'https://escape.ozovalihasan.com/',
      sourceLink: 'https://github.com/ozovalihasan/escape-rpg-game#readme',
    },
    {
      name: 'BookStore CMS',
      projectImage: 'assets/project5.png',
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
      title: 'Github',
      link: 'https://github.com/ozovalihasan',
      icon: 'fa-github',
    },
    {
      title: 'Linkedin',
      link: 'https://www.linkedin.com/in/hasan-ozovali/',
      icon: 'fa-linkedin',
    },
    {
      title: 'Angellist',
      link: 'https://angel.co/u/hasan-ozovali',
      icon: 'fa-angellist',
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/ozovalihasan',
      icon: 'fa-twitter',
    },
    {
      title: 'Resume',
      link: 'https://drive.google.com/file/d/153IJHzt8K-sMMl_U3C36bQC4QUxd7gDP/view?usp=sharing',
      icon: 'fa-file-alt',
    },
  ],
};
const store = createContext(initialState);

export default store;
