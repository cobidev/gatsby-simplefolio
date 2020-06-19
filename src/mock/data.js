import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Rishik', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi!, I\'m ',
  name: 'Rishik',
  subtitle: 'I like to play with code',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'I Rishik Goyal is currently doing my B.Tech from a reputed Indian college, Indian Institute of Information Technology, Una. I am good in academics and have found a perfect balance between my academics and technical skills. I am very passionate about what I do.',
  paragraphTwo: 'I consider myself as a forever student, eager to both build my academics and stay in tune with technologies. I am an executive member of cultural club of my college as well and an active member of GLUG NITH. I try to make websites and machine learning models.',
  paragraphThree: 'When I am not doing any productive work, I like to play CSGO and listen some music',
  resume: 'https://drive.google.com/file/d/1-bqYmHA6N54AwXDqN0uK25NNNEDLcNNs/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'node.jpg',
    title: 'face-Detection Web-App',
    info: 'A website which has both front-end and back-end using Node. The front-end is made using React-js, and the server is made with the help of postgreSql. The website is deployed on heroku',
    info2: 'You can signin/register in website, and then detect the face in any picture which is build with an API, the number of entries is also counted per user.',
    url: 'https://myfacerecognition-app.herokuapp.com/',
    repo: 'https://github.com/rishik-00/Face-Recognition-Web-app', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'robot.jpg',
    title: 'RoboFriends',
    info: 'A simple React app which takes the images and name of robots from the  api, and then displays on this website. You can search any robot from the given list.',
    info2: 'Made as an starting project',
    url: 'https://rishik-00.github.io/RoboFriends/',
    repo: 'https://github.com/rishik-00/RoboFriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'dog.webp',
    title: 'Dog-breed Identification',
    info: 'A machine learning model made which detects the breed of the dog from total 180 different classes. The model is made using Tensorflow, keras. The model used is MobilenetV2. Libraries used are Pandas, Numoy, Matplotlib',
    info2: 'The dataset is taken from a kaggle competition and model is trained on more than 10k images. The whole project is done on Google Colab',
    url: '',
    repo: 'https://github.com/rishik-00/Dog-Breed-Identification', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'face.jpg',
    title: 'Face expression Recognition',
    info: 'A machine learning model made using CNN and computer vision. It predicts the expression on your face. The model can predict expression from a input image as well as from the laptop camera.',
    info2: 'The libraries used are Tensorflow, pandas, Keras and data is taken from kaggle',
    url: '',
    repo: 'https://github.com/rishik-00/Face-Expression-recognition',

  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rishikgoyal00@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/_rishik',
    },
    
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rishik-goyal/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/rishik-00',
    },
    {
      id: uuidv1(),
      name: 'medium',
      url: 'https://medium.com/@rishikgoyal00'
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
