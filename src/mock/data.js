import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
    technologies: [
      {
        value: 'React.JS',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/react.svg',
      },
      {
        value: 'HTML5',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/html5.svg',
      },
      {
        value: 'Netlify',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/netlify.svg',
      },
      { value: 'Node.JS', technologyId: nanoid() },
    ],
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
    technologies: [
      {
        value: 'React.JS',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/react.svg',
      },
      {
        value: 'HTML5',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/html5.svg',
      },
      {
        value: 'MongoDB',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/mongodb.svg',
      },
    ],
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
