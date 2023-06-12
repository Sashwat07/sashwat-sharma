import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  birdIcon,
  inspektlabs,
  praktice,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id:"Sashwat_Sharma.pdf",
    title: "Resume"
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Developer",
    company_name: "Text Mercato",
    icon: birdIcon,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Developed a dynamic price comparison and template conversion tool from scratch as a senior software engineer.",
      "Implemented intuitive user interfaces using modern frontend frameworks to ensure a seamless user experience.",
      "Built robust and scalable backend systems for data processing, APIs, and database management.",
      "Demonstrated the ability to drive innovation and deliver high-quality software solutions.",
      "Built robust and scalable backend systems for data processing, APIs, and database management."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Inspektlabs.ai",
    icon: inspektlabs,
    iconBg: "#383E56",
    date: "June 2021 - July 2022",
    points: [
      "Developed Vehicle Damage Detection tool using React for the frontend and Flask for serving the backend ML model.",
      "Optimized the end-to-end pipeline to achieve a significant reduction in inference time, achieving a target of under 2 seconds from the initial 8 seconds.",
      "Collaborated with team members to gather requirements, design system architecture, and implement features.",
      "Ensured seamless integration between frontend and backend components, providing a smooth user experience.",
    ],
  },
  {
    title: "Data Science",
    company_name: "Praktice Health",
    icon: praktice,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - Feb 2021",
    points: [
      "Developed end-to-end Chatbot using AWS services and Google Dialogflow.",
      "Conducted evaluation of different chatbot toolkits for a Proof of Concept (POC) project.",
      "Integrated chatbot functionalities with external systems and APIs.",
      "Collaborated with stakeholders to gather requirements and provide technical expertise.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sanjeet Kumar",
    designation: "Senior ML Engineer",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
