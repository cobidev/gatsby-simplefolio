import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Vishavjeet Singh',
  subtitle: 'I am a Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a 4th year Computer Science Engineer',
  paragraphTwo: 'currently working in Nagarro Software Company Gurgaon',
  paragraphThree: 'My interest is to build something which can be used by millions',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'car.jpg',
    title: 'Self-Driving Car',
    info: 'A simple deep learning model to predict the steering angle so that the car remains on the track',
    info2: 'Technologies used are Python, Numpy, Pandas, Keras, Deep Learing',
    url: '',
    repo: 'https://github.com/Vishavjeet6/self-driving-car', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'whatsapp.jpeg',
    title: 'WhatsApp ChatBot',
    info: 'This chatbot can give you movies info, news, wikipedia, and general query answers',
    info2: 'Technologies used are Python, Google Cloud, DialogFlow, Twilio, Flask, MongoDB',
    url: '',
    repo: 'https://github.com/Vishavjeet6/whatsapp-bot', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'web.jpg',
    title: 'WEBSITE CRAWLER',
    info: 'It travserse all the links in a site and stores in a file',
    info2: 'Technologies used are Python, Multi-Threading',
    url: '',
    repo: 'https://github.com/Vishavjeet6/website-crawler', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'hr.jpg',
    title: 'HR-Employee-Manager',
    info: 'HR manager can login to application and manage employees. However the details of the Employees are maintained on a separate server i.e in this project rest api is exposed and consumed',
    info2: 'Made in Java, RESTful webservices, SPRING MVC, JSP, Jersey, Maven, Hibernate',
    url: '',
    repo: 'https://github.com/Vishavjeet6/HREmployeeManager', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'tictac.PNG',
    title: 'Tic-Tac-Toe',
    info: 'Tic Tac Toe using AI which uses Min-Max Algorithm',
    info2: 'Technologies used are Python, JS, CSS, HTML',
    url: 'https://vishavtictactoe.netlify.com/',
    repo: 'https://github.com/Vishavjeet6/Tic-Tac-Toe', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: 'Let\'s Connect',
  email: 'vishavjeetsinghthakur@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vishavjeets/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Vishavjeet6/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
