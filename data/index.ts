import { FaGithub } from 'react-icons/fa';
import { TbBrandBitbucket } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Strengths", link: "#strength" },
    { name: "Contact", link: "#contact" },
  ];

  export const people = [
    {
      id: 1,
      name: "It's me !!",
      designation: "From Osaka, Japan",
      image:
        "/public/nao.webp",
    },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  export const technologies = [
    {
      title: "Testing",
      description: "Playwright, Jest, Postman"
    },
    {
      title: "Front-End",
      description: "Angular, HTML, CSS, SASS, JavaScript, TypeScript, React, Bootstrap, Tailwind, Angular Material, Swiper, Stripe",
    },
    {
      title: "Back-End",
      description: "Node.js, Express.js",
    },
    {
      title: "Database",
      description: "mySQL, postgreSQL, MongoDB",
    },
    {
      title: "Deployment",
      description: "Amazon Web Services, Aiven, Vercel"
    },
    {
      title: "Other Tools",
      description: "Jira, BitBucket, XRay, TestRail, Testlink, Figma, Firebase"
    },
  ]
  
  export const projects = [
    {
      id: 1,
      title: "MagyDeck",
      des: "our comprehensive companion app for deckbuilding, gameplay, event management, and Magic news.",
      img: "/p1.jpg",
      iconLists: ["/ang.svg", "/boots.svg", "/ts.svg"],
      link: "https://github.com/naopeke/MagyDeck",
    },
    {
      id: 2,
      title: "MagyDeck RESTful API",
      des: "Experience the power of Node.js, Express, and MySQL in building a comprehensive Magic: The Gathering deck management RESTful API.",
      img: "/p1-2.png",
      iconLists: ["/node2.svg", "/js.svg", "/mysql2.svg"],
      link: "https://github.com/naopeke/MagyDeck_API",
    },
    {
      id: 3,
      title: "EC Site",
      des: "Seamlessly integrate Stripe payment processing into your Angular-based e-commerce website.",
      img: "/p2.png",
      iconLists: ["/ang.svg", "/tail.svg", "/ts.svg"],
      link: "https://github.com/naopeke/store-angular",
    },
    {
      id: 4,
      title: "Chat App",
      des: "Real-time connection, full-fledged chat app built with Firebase (Auth and Firestore)",
      img: "/p3.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/fireb.svg"],
      link: "https://github.com/naopeke/react-chatapp2",
    },
  ];
  

  
  export const workExperience = [
    {
      id: 1,
      title: "Highly Motivated and Studious",
      desc: "A strong desire for personal and professional growth by engaging in continual learning and skills development.",
      className: "md:col-span-2",
      thumbnail: "/exp_1.svg",
    },
    {
      id: 2,
      title: "Reliable in Deadlines",
      desc: "consistently ensures that all tasks and projects are completed on or before due dates.",
      className: "md:col-span-2",
      thumbnail: "/exp_2.svg",
    },
    {
      id: 3,
      title: "Proactive Work Approach",
      desc: "taking iniciative in tasks and responsibilities",
      className: "md:col-span-2", 
      thumbnail: "/exp_3.svg",
    },
    {
      id: 4,
      title: "Social personality:",
      desc: "able to intereact effectively with colleagues and clients",
      className: "md:col-span-2",
      thumbnail: "/exp_4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      icon: FaGithub,
      url: "https://github.com/naopeke"
    },
    {
      id: 2,
      icon: TbBrandBitbucket,
      url: "https://bitbucket.org/naodev"
    },
    {
      id: 3,
      icon: CiLinkedin,
      url: "https://www.linkedin.com/in/nao-mukai-205b71207/"
    },
  ];

