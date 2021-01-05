import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ludmyla-dev-portfolio', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Front-end developper', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Bonjour, je m'appele",
  name: 'Ludmyla',
  subtitle: 'Je suis une développeuse Web ',
  cta: 'Voir plus',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.jpg',
  paragraphOne:
    'Après la formation bac +2 Développer Web/web mobile je continue à développer mes compétences front-end.',
  paragraphTwo:
    "J'essay à créer les sites internet attractifs, fonctionnels et adaptés à ses utilisateurs, afin que ces derniers puissent les utiliser facilement et souhaitent y revenir.",
  paragraphThree:
    "Je suis capable d'utiliser différentes technologies: PHP, MySql, JS, HTML, SCC et je suis passionnée de React et Graphql avec Gatsby.js",
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
  resume: 'https://drive.google.com/file/d/1Nz94LvE1KYHSVYKh1BBb9Od48Njw3GN-/view?usp=sharing', // if no resume, the button will not show up'
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
    img: 'project5.jpg',
    title: 'Un site vitrine pour un salon du maquillage permanent ',
    info: 'Gatsby+Netlify',
    info2: 'Git+React',
    url: 'https://lessia.netlify.app/',
    repo: 'https://github.com/liudmylla/marina_marishkette', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project6.jpg',
    title: 'Un site vitrine pour une esthéticienne',
    info: 'Gatsby+Netlify',
    info2: 'Git+React',
    url: 'https://espace-estethique64.netlify.app/',
    repo: 'https://gitlab.com/Liudmylla/photo-galery', // if no repo, the button will not show up
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
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Un site pour l’association avec une gestion de contenue',
    info: 'PHP(poo) + MySql',
    info2: 'Bootstrap + JQuery',
    url: 'https://russe64.fr/',
    repo: 'https://gitlab.com/Liudmylla/annonces_russes', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Je m'appele Liudmyla Duvivier et j'habite à Biarritz dans le Sud-Ouest de la France ",
  btn: 'E-mail',
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
