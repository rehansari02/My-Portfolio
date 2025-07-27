// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";

// Education Section Logo's
import MMMHS from "./assets/Education logo/MMMHS.jpeg";
import UCC from "./assets/Education logo/Udhna.png";

// Project
import Sundown from "./assets/Work/Sundown.png";
import Hotel from "./assets/Work/Airbnb.png";
import Book from "./assets/Work/book-management.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: UCC,
    school: "Udhna Academy College, Surat",
    date: "Jul 2023 - Apr 2026",
    grade: "Currently pursuing 3 year ",
    desc: "I am currently pursuing my Bachelor's degree in Computer Applications (BCA) from Udhna Academy College, Surat. During my studies, I have developed a strong foundation in programming, web development, and database systems. I have also worked on practical projects that helped me apply theoretical knowledge to real-world scenarios, enhancing my problem-solving and software development skills.",
    degree: "Bachelor of Computer Applications (BCA)",
  },

  {
    id: 1,
    img: MMMHS, // apni school ki image ka path
    school: "Mount Mary Mission High School",
    date: "Jun 2022 - Mar 2023",
    grade: "68.90% Percentile",
    desc: "I completed my Class 12th in Commerce stream from Mount Mary Mission High School, under the Gujarat Secondary and Higher Secondary Education Board (GSEB), where I studied subjects like Accountancy, Statistics, and Economics and other more Subjects.",
    degree: "12th Grade (Commerce - GSEB Board)",
  },
  {
    id: 2,
    img: MMMHS,
    school: "Mount Mary Mission High School",
    date: "Jun 2020 - Apr 2021",
    grade: "85.11% Percentile",
    desc: "I completed my Class 10 education from Mount Mary Mission High School under the Gujarat Secondary and Higher Secondary Education Board (GSEB), where I studied Science, Maths, Social Science and other more Subjects.",
    degree: "10th Grade (GSEB Board)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Sundown Studio Clone",
    description:
      "A fully responsive and visually appealing clone of the Sundown Studio website built using HTML, CSS, and JavaScript. This project replicates modern UI elements such as smooth animations, interactive scroll effects, and mobile-friendly design. It helped me strengthen my frontend skills by focusing on pixel-perfect layout, responsiveness, and creative design techniques.",
    image: Sundown,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rehansari02/Sundown-Studio-Clone.git",
    webapp: "https://sundown-studio-clone-ar.netlify.app/",
  },
  {
    id: 1,
    title: "WanderLust Hotel",
    description:
      "WanderLust is a full-stack web application inspired by Airbnb, developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to explore hotel listings, add new properties, post reviews, and manage bookings. With dynamic RESTful APIs and MongoDB integration using Mongoose, the app supports full CRUD operations. It features user authentication, clean UI, and real-time form handling to replicate a real-world experience.",
    image: Hotel,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "RESTful API",
      "EJS",
    ],
    github: "https://github.com/rehansari02/airbnb-final-ar.git",
    webapp: "https://airbnb-final-ar-1-clones.onrender.com/listings",
  },
  {
    id: 2,
    title: "BookShelf - Book Management App",
    description:
      "BookShelf is a full-stack MERN application that helps users manage a collection of books with ease. Users can add new books with details like title, author, publisher, and price, update existing records, delete entries, and view the complete book list. Built using MongoDB, Express.js, React.js, and Node.js, the app features clean routing, RESTful APIs, and form validation for real-time interactions. Axios is used for API communication and the app is styled with responsive design principles.",
    image: Book,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "RESTful API",
      "Mongoose",
      "CRUD",
      "JavaScript",
    ],
    github: "https://github.com/rehansari02/book-management.git",
    webapp: "https://book-management-61re.vercel.app/",
  },
];
