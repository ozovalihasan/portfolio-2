import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { createContext } from 'react';
import EADImage from "../assets/EAD-portfolio.webp"
import project0Image from "../assets/project0.webp"
import project1Image from "../assets/project1.webp"
import project4Image from "../assets/project4.webp"

export const routes = {
  ead: 'https://ead.ozovalihasan.com/',
  "dr-ti": "https://dr-ti.ozovalihasan.com/",
  "dr-ti-api-docs": "https://dr-ti-api.fly.dev/api/docs",
  whistle: "https://whiistle.fly.dev/",
  escape: "https://escape.ozovalihasan.com/",
}

type StateType = {
  projects: {
    id: number;
    name: 'EAD' | 'Dr. Ti' | 'Whistle' | 'Escape';
    description: string;
    projectImage: string;
    usedLanguages: string[];
    liveLink: string;
    sourceLink: string;
  }[],
  skills: {
    name: string;
    items: string[];
  }[],
  socialLinks: {
    name: string;
    link: string;
    icon: IconProp;
  }[]

}

const initialState: StateType = {
  projects: [
    {
      id: 0,
      name: 'EAD',
      description: 'EAD(Entity Association Diagram) is a tool to make a development process of a Rails Project easier and faster. It contains two parts; user interface and a gem. Defined associations can be implemented to a Rails project in a second by using the gem.',
      projectImage: EADImage,
      usedLanguages: [
        'React',
        'TypeScript',
        'Zustand',
        'Tailwind CSS',
        'Ruby',
        'Vite',
      ],
      liveLink: routes["ead"],
      sourceLink: 'https://github.com/ozovalihasan/ead/#readme',
    },
    {
      id: 1,
      name: 'Dr. Ti',
      description: 'Did you do ...? Don\'t remember, Track It (Dr. Ti) is a mobile application. Any user may create an item to track and add piece to check.',
      projectImage: project0Image,
      usedLanguages: [
        'React',
        'Redux Toolkit',
        'Chart.js',
        'Ruby on Rails',
      ],
      liveLink: routes["dr-ti"],
      sourceLink: 'https://github.com/ozovalihasan/track',
    },
    {
      id: 2,
      name: 'Whistle',
      description: 'Whistle is a social networking website for divers. It is built by using Ruby on Rails.',
      projectImage: project1Image,
      usedLanguages: [
        'HTML/CSS',
        'Ruby',
        'Ruby on Rails',
      ],
      liveLink: routes["whistle"],
      sourceLink: 'https://github.com/ozovalihasan/whistle#readme',
    },
    {
      id: 4,
      name: 'Escape',
      description: 'Turn-based RPG game "Escape". Escaping from island isn\'t easy.',
      projectImage: project4Image,
      usedLanguages: [
        'JavaScript',
        'Phaser 3',
      ],
      liveLink: routes["escape"],
      sourceLink: 'https://github.com/ozovalihasan/escape-rpg-game#readme',
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
      icon: ['fab', 'x-twitter'],
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
