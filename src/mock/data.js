import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ludmyla-dev-portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Developer full stack', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ludmyla Duvivier',
  subtitle: 'Full stack developer ',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_0926.jpg',
  paragraphOne:
    'Familiar  with commons stacks (LAMP, MEAN, JAM).Experience developing websites  and applications  using Git for version control.Understanding  of the full stack from Rest backend to modern SPA frontend.',
  paragraphTwo:
    'Knowledge: React,Gatsby,HeadlessCMS,GraphQL, Sass, Bootstrap, MySql,Nodejs(Hapi),Docker,Linux(Ubuntu),Mongodb(Mongoose)',
  paragraphThree: 'Proficient: JavaScript/Typescript, Angular, RxJs,PHP Symfony,HTML/CSS..',
  resume:
    'https://docs.google.com/document/d/1f86nriqIocSBZFzVoPtihM4Go-jWgi6LtZJcrKo_bMw/edit?usp=sharing', // if no resume, the button will not show up'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Static website for Beauty salon "Mlfacialiste"',
    info: 'Gatsby+Contentful+Netlify',
    info2: 'Git+React',
    url: 'https://ml-facialiste.netlify.app/',
    repo: 'https://gitlab.com/Liudmylla/marina', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Static website for Travel agency "BBB',
    info: 'Gatsby+Contentful+Netlify',
    info2: 'Git+React',
    url: 'https://biarritz-beregbaskov.netlify.app/',
    repo: 'https://gitlab.com/Liudmylla/biarritz-bereg-baskov', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.jpg',
    title: 'Static website for Permanent makeup studio "Lessia"',
    info: 'Gatsby+Netlify',
    info2: 'Git+React',
    url: 'https://lessia.netlify.app/',
    repo: 'https://github.com/liudmylla/marina_marishkette', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project6.jpg',
    title: 'Static website for Beauty salon "Lana"',
    info: 'Gatsby+Netlify',
    info2: 'Git+React',
    url: 'https://espace-estethique64.netlify.app/',
    repo: 'https://gitlab.com/Liudmylla/photo-galery', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Static website for video production studio ',
    info: 'Gatsby+Cloudinary+Netlify',
    info2: 'Git+React',
    url: 'https://marina-video.netlify.app/',
    repo: 'https://gitlab.com/Liudmylla/marina-marishkette-dimension', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'liudmyla12@yahoo.fr',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'gitlab',
      url: 'https://gitlab.com/Liudmylla',
    },
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
