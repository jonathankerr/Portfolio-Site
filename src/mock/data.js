/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Find Jonathan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Jonathan Kerr, Software Developer, Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I\'m',
  name: 'Jonathan',
  subtitle: 'I\'m A Software Engineer',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profileImage.jpg',
  paragraphOne: 'Currently completing my Bsc Hons degree in Computer Science at The University of Strathclyde. I also work as a part time Product Developer at Simul8 where i focus on bug fixes and improvements.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: ' ', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'covinfo2.PNG',
    title: 'COVInfo',
    info: 'A modern & fast web app allowing users to track local and global Covid-19 statistics live as well as stay up to date with the most recent headlines and government guidelines.',
    info2: 'Javascript, SCSS & Bootstrap MDB5',
    url: 'https://github.com/jonathankerr/COVInfo',
    repo: 'https://github.com/jonathankerr/COVInfo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: ' ',
    title: 'Simple Shell',
    info: 'A Shell built in C for Unix systems. Capable of commands such as setpath, !-<no> & alias <name> <command>',
    info2: 'C',
    url: 'https://github.com/jonathankerr/SimpleShell',
    repo: 'https://github.com/jonathankerr/SimpleShell', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: ' ',
    title: 'Naughts & Crosses AI',
    info: 'An in browser game of naughts and crosses against a talented and slightly unbeatable AI Player.',
    info2: 'Javascript',
    url: 'https://jonathankerr.github.io/X-O-AI/',
    repo: 'https://github.com/jonathankerr/X-O-AI', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Reach out to me below',
  btn: 'Email',
  email: 'me@findjonathan.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jonathan--kerr/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jonathankerr',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
