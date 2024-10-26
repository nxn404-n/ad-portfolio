import doitrn from "../assets/doit-rn.png";
import ani106 from "../assets/ani106.png";
import quizro from "../assets/quizro.png";
import awesomebooks from "../assets/awesomebooks.png";


export const projects = [
  {
    img: doitrn,
    name: 'Doit-rn',
    descHeading: 'A productivity web app with user authentication and task management',
    descMain1: 'doit-rn is a task management and productivity web app.',
    descMain2: 'I developed this custom todo app with a simple and intuitive interface designed to enhance productivity.',
    descMain3: 'It features user login and signup with data persistence through localStorage, a responsive and accessible UI built with React and styled using Tailwind CSS, allowing users to securely store, update, and track their tasks and it has more than 90% component test coverage',
    builtWith: [
      "React",
      "Tailwind CSS",
      "Vitest"
    ],
    sourceCode: 'https://github.com/nxn404-n/doit-rn',
    liveLink: 'https://doit-rn.netlify.app',
  },
  {
    img: ani106,
    name: 'Ani106',
    descHeading: 'An anime discovery platform with search and detailed view capabilities',
    descMain1: 'Ani106 is an interactive anime discovery website.',
    descMain2: 'I built this custom website to provide anime enthusiasts with a smooth browsing experience, featuring curated sections for top, upcoming, and seasonal anime.',
    descMain3: 'It includes a search feature powered by Redux for managing search state, responsive UI animations using Tailwind CSS, and dynamic routing to detailed anime information pages. Ani106 combines speed and accessibility to deliver an enjoyable, user-friendly experience for exploring anime content and it has more than 90% component test coverage',
    builtWith: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Vitest"
    ],
    sourceCode: 'https://github.com/nxn404-n/Ani106',
    liveLink: 'https://ani106.netlify.app',
  },
  {
    img: quizro,
    name: 'Quizro',
    descHeading: 'An interactive quiz platform with a wide range of tech categories',
    descMain1: 'Quizro is a customizable quiz website built for tech enthusiasts.',
    descMain2: 'I developed this platform to offer engaging quizzes across several tech categories, including Linux, Bash, Docker, SQL, CMS, Code, and DevOps.',
    descMain3: 'It features dynamic question handling and responsive layouts powered by React, with Redux managing state for smooth transitions between quiz categories and answers. Tailwind CSS enhances the UI, ensuring a clean, accessible experience for users to test and expand their knowledge.',
    builtWith: [
      "React",
      "Redux",
      "Tailwind CSS",
    ],
    sourceCode: 'https://github.com/nxn404-n/Quizro',
    liveLink: 'https://quizro.netlify.app',
  },
  {
    img: awesomebooks,
    name: 'Awesome Books',
    descHeading: 'A collaborative web app for managing book collections',
    descMain1: 'Awesome Books is a sleek, user-friendly web application developed remotely by a team of developers.',
    descMain2: 'The app enables users to add and remove books from their library easily, making it a convenient tool for managing reading lists and personal collections. Designed with simplicity in mind, the interface allows for a seamless experience when adding new titles or removing completed ones.',
    descMain3: 'Built with a focus on teamwork and collaboration, the project integrates interactive elements that streamline book management while maintaining a clean, responsive design. Awesome Books provides book enthusiasts with an intuitive platform to organize, track, and curate their reading collections.',
    builtWith: [
      "Javascript"
    ],
    sourceCode: 'https://github.com/nxn404-n/Awesome-Books',
    liveLink: 'https://nxn404-n.github.io/Awesome-Books/',
  }
];
