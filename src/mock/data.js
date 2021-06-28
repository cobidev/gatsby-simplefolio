import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nickos Papageorge', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi there, my name is ',
  name: 'Nickos Papageorge',
  subtitle: 'Software Engineer',
  cta: 'LEARN MORE ABOUT ME & MY PROJECTS',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'I am a software engineer that has skills in both the back-end of web applications and the front-end. My previous roles in leadership have taught me how to work in a team environment to complete a common goal.',
  paragraphTwo:
    'Communication is key when working with a group and I take pride in being a reliable active member of a team. I have a history of team success, strong leadership, and am a very highly motivated worker who is eager to help your company!',
  // eslint-disable-next-line prettier/prettier
  paragraphThree: 'When I\'m not coding, I like to stay active by playing soccer & basketball. I have a passion for meeting new people & traveling the world',
  // Resume: 'https://www.linkedin.com/in/nickos-papageorge/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'atf.png',
    title: 'All The Feels',
    info:
      'All The Feels is a Full stack application that grabs data using React.js through a backend API that we made using MongoDB. This was a group project that involved a lot of pair-programming. Made with React/Node/MongoDB',
    info2: '',
    url: 'https://all-the-feels-fe.herokuapp.com/',
    repo: 'https://github.com/Kid-Then-Kid-Now',
  },
  {
    id: nanoid(),
    img: 'schwifty.png',
    title: 'Search Schwifty',
    info:
      'Search Schwifty is a Front-End application that grabs data using React.js from a Rick & Morty api and brings back information about all the characters on the show. Made with HTML/CSS/JavaScript/React/',
    info2: '',
    url: 'https://search-schwifty.herokuapp.com/home',
    repo: 'https://github.com/nickosp/search-schwifty-',
  },
  {
    id: nanoid(),
    img: 'ftllama.png',
    title: 'Fear The Llama',
    info:
      'Fear The Llama is a unique take on the classic “Hangman” game, featuring audio & multiple word lists. Made with Vanilla JavaScript/CSS/HTML',
    info2: '',
    url: 'https://nickosp.github.io/Fear-The-Llama/',
    repo: 'https://github.com/nickosp/Fear-The-Llama',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to hire me? Yay!',
  btn: '',
  email: 'nickospapageorge85@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nickos-papageorge/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nickosp',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
