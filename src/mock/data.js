import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Your Name',
  subtitle: `I'm the Unknown Developer.`,
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
  paragraphTwo:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
  paragraphThree: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  resume: 'https://drive.google.com/uc?export=download&id=1UyBpApZhxcS3sKNtKrmRLU_NqIkGRjTa',
  // use Google Drive to upload your file and replace YOUR FILE ID after id=... or use any CDN you prefer
  // Alternatively, empty the string to disable the button if it's not needed
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Project Title',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
    info2: '',
    url: '#!',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Project Title',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
    info2: '',
    url: '#!',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Project Title',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.',
    info2: '',
    url: '#!',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: `Let's Talk`,
  email: 'cobimr@protonmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://github.com/cobidev/gatsby-simplefolio',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://github.com/cobidev/gatsby-simplefolio',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://github.com/cobidev/gatsby-simplefolio',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cobidev/gatsby-simplefolio',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
