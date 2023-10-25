// Project Images
import website from "@/public/img/projects/website.png";
import amazone from "@/public/img/projects/amazone.png";
import lok from "@/public/img/projects/lok.png";
import filmdex from "@/public/img/projects/filmdex.png";
import generator from "@/public/img/projects/readme-generator.png";
import pokédex from "@/public/img/projects/pokemon.png";

// Brand
export const SITE_NAME = "Jordan W. Hunter: React | Next.js Developer";
export const SITE_DESCRIPTION =
  "Jordan Hunter (he/him) is an avid full-stack JavaScript developer residing in New York City. This portfolio page highlights some of his most recent projects/developments - both agency-assigned and freelance.";

// Generic Button Styling
const genericButton =
  "text-gray-400 hover:text-gray-600 border-white bg-white bg-opacity-40 shadow-lg shadow-black/[0.03]";

// Generic Tab Styling
const genericTab =
  "text-center lg:text-left text-gray-400 leading-tight";

// Menu and Navigation
export const MENU = {
  navigation: [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ],

  buttons: [
    {
      text: "Contact Me",
      href: "#contact",
      size: "sm",
      direction: "right",
      arrow: true,
      internal: true,
      classProps:
        "bg-gradient-to-r from-blue-400 to-green-600 text-white border-black/10",
    },
    {
      text: "Resume",
      href: "https://drive.google.com/drive/u/0/folders/11omElH3U_feB1MhtBYno0uvjD0a5I8bz",
      size: "sm",
      direction: "right",
      download: true,
      classProps: genericButton,
    },
    {
      linkedin: true,
      href: "https://www.linkedin.com/in/jordanhunterr/",
      size: "2xl",
      classProps: genericButton,
    },
    {
      github: true,
      href: "https://github.com/jordanwhunter",
      size: "2xl",
      classProps: genericButton,
    },
  ],

  tabs: [
    {
      title: "Technologies",
      id: "technologies",
      content: (
        <ul className={genericTab}>
          <li>React | Next.js</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className={genericTab}>
          <li>
            Columbia University <span className="font-bold">(CU)</span> -{" "}
            <span className="italic">New York, NY</span>
            <ol>Cert. JavaScript Development</ol>
          </li>
          <br />
          <li>
            University of South Florida <span className="font-bold">(USF)</span>{" "}
            - <span className="italic">Tampa, FL</span>
            <ol>B.S. Health Sciences</ol>
          </li>
        </ul>
      ),
    },
    {
      title: "Awards",
      id: "awards",
      content: (
        <ul className={genericTab}>
          <li>CU Flame of Ambition Award</li>
          <li>CU Top Voted Projects Award</li>
          <li>Sigma Alpha Lambda Honor Society</li>
          <li>USF Dean&apos;s List 2014-2016</li>
          <li>Florida Bright Future&apos;s Scholarship</li>
        </ul>
      ),
    },
    {
      title: "Assessments",
      id: "assessments",
      content: (
        <ul className={genericTab}>
          <li>
            LinkedIn Skill - React <span className="font-bold">(top 5%)</span>
          </li>
          <li>
            LinkedIn Skill - HTML5 <span className="font-bold">(top 5%)</span>
          </li>
          <li>
            LinkedIn Skill - CSS3 <span className="font-bold">(top 5%)</span>
          </li>
          <li>
            LinkedIn Skill - MongoDB <span className="font-bold">(top 5%)</span>
          </li>
          <li>
            LinkedIn Skill - Front-End Development{" "}
            <span className="font-bold">(top 15%)</span>
          </li>
        </ul>
      ),
    },
  ],

  projects: [
    {
      title: "Portfolio",
      description:
        "A front-end portfolio website showcasing Jordan Hunter's creations.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Framer-Motion", "Vercel"],
      image: website,
      href: "https://jordanwhunter.vercel.app/",
      repo: "https://github.com/jordanwhunter/jordanwhunter_com",
    },
    {
      title: "Amazone",
      description:
        "A full-stack Firebase mock e-commerce platform (DO NOT submit sensitive information).",
      tags: [
        "React",
        "JavaScript",
        "Firebase",
        "Firestore",
        "Stripe",
        "Express.js",
        "Moment.js",
      ],
      image: amazone,
      href: "https://ama-zone.web.app/",
      repo: "https://github.com/jordanwhunter/amazone",
    },
    {
      title: "Lok",
      description:
        "A full-stack, small-sized file cloud storage system equipped with personalized login authentication and strict data privacy.",
      tags: ["React", "JavaScript", "Firebase", "Firestore", "Bootstrap"],
      image: lok,
      href: "https://lokdevs.web.app/login",
      repo: "https://github.com/jordanwhunter/lok-v2",
    },
    {
      title: "The Film API",
      description:
        "A full-stack custom-built API cataloging 130 types of 35mm / 120-format photo film with submission page to add new films to database.",
      tags: [
        "Svelte",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "Vercel",
      ],
      image: filmdex,
      href: "https://filmapi.vercel.app/",
      repo: "https://github.com/jordanwhunter/filmdexapi-v2",
    },
    {
      title: "README Generator",
      description:
        "A back-end, command-line application that dynamically generates a professional markdown from a user's input using the Inquirer package.",
      tags: ["JavaScript", "Node.js", "Inquirer.js"],
      image: generator,
      href: "https://drive.google.com/file/d/1S11bCuwkcpm8KrDXaqcMQJ82nAFb9-Tv/view",
      repo: "https://github.com/jordanwhunter/readme-generator",
    },
    {
      title: "Pokédex",
      description:
        "A front-end pokédex application cataloging all 898+ pokémon.",
      tags: ["React", "JavaScript", "Axios", "Bootstrap"],
      image: pokédex,
      href: "https://jordanwhunter.github.io/pokedex/",
      repo: "https://github.com/jordanwhunter/pokedex",
    },
  ],
} as const;
