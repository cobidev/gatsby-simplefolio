import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Liudmyla-dev-portfolio', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Front-end developper', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Salut, je m'appele",
  name: 'Liudmyla',
  subtitle: 'Je suis une développeuse Web ',
  cta: 'Voir plus',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.jpg',
  paragraphOne: 'coming soon',
  paragraphTwo: 'coming soon',
  paragraphThree: 'coming soon',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
  resume: 'https://www.linkedin.com/in/liudmyla-duvivier-05570b15a/', // if no resume, the button will not show up'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Un site vitrine de salon de beauté',
    info: 'Gatsby+Contentful+Netlify',
    info2: 'Git+React',
    url: 'https://ml-facialiste.netlify.app/',
    repo: 'https://gitlab.com/Liudmylla/marina', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Un site vitrine pour une agence de tourisme',
    info: 'Gatsby+Contentful+Netlify',
    info2: 'Git+React',
    url: 'https://biarritz-beregbaskov.netlify.app/',
    repo: 'https://gitlab.com/Liudmylla/biarritz-bereg-baskov', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Un site vitrine pour la créatrice des videos',
    info: 'Gatsby+Cloudinary+Netlify',
    info2: 'Git+React',
    url: 'https://marina-video.netlify.app/',
    repo: 'https://gitlab.com/Liudmylla/marina-marishkette-dimension', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Souhaitez-vous m'embaucher? ",
  btn: 'Parlons',
  email: 'liudmyla.duvivier@outlook.fr',
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
      url: 'https://www.linkedin.com/in/liudmyla-duvivier-05570b15a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Liudmylla',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
