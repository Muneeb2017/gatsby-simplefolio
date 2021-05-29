import {
  nanoid
} from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Muneeb| portfolio", // e.g: 'Name | Developer'

  description: "Welcome to my Portfoilio Website", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, My Name is',
  name: 'Muneeb Ahmed',
  subtitle: 'I am a web developer',
  cta: 'Know more about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a CS undergrad from the beautiful valley of Kashmir. I am working on JavaScript and MERN stack',
  paragraphTwo: 'I have also worked on python and some machine learning projects',
  paragraphThree: ' Looking forward to work on some very amazing projects!',
  resume: 'https://drive.google.com/file/d/1mOqZclsNJopbpAKm6uFm5Pg7_9gBMPe4/view?usp=sharing',


};

// PROJECTS DATA
export const projectsData = [{
    id: nanoid(),
    
    title: 'Weather Web app',
    info: 'A web app using python framework flask to predict weather of a certain area using machine learning algorithms on a dataset',

    url: '',
    repo: 'https://github.com/Muneeb2017/WeatherPredict-ML', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Photo Gallery App',
    info: ' A photo gallery app made with ReactJS and firebase ',
    info2: '',
    url: 'https://ma-photo-gallery-app.netlify.app/',
    repo: 'https://github.com/Muneeb2017/photo-gallery-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
   
    title: 'A React TODO app',
    info: ' App made in React to log your daily todo list . ',
    info2: '',
    url: 'https://react-todoapp-648bc.web.app/',
    repo: 'https://github.com/Muneeb2017/react-todoapp',
    
  },

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'muneeb.riyaz75@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [{
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/_muneeb1',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/muneeb-ahmad-420ab7163/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Muneeb2017',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};