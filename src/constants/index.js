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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  import gym from "../assets/gym.png"; 
  import Money_Manager from "../assets/money_manager.png"; 
  import microsoft from "../assets/microsoft.png"; 
  import linkedin from "../assets/linkedin.png"; 
  import hackerrank from "../assets/hackerrank.png";
  import coursera from "../assets/coursera.png";
  import datacamp from "../assets/datacamp.png";
  import icpc from "../assets/icpc.png";
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
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
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Industrial Trainee",
      company_name: "Bangladesh Computer Council (BCC)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2023 - Feb 2023",
      points: [
        "Learnt about software quality assurance and software testing and how they plan, control, analyze and implement different kind of softwares.",
        "Attented a session at Network Operation Center to get knowledge about how network links are monitored and security is assured of data center.",
        "Learn about Computer Incident Response Team (CIRT) and what they follor to ensure the security of any software.",
        "Visited National Data Center and got some overview about the maintenance of data and the planning for the security assurance",
        "Got an overview about an ongoing project of Bangla Language Enrichment which is under Bangladesh Computer Council."
      ],
    },
    {
      title: "Team Coordinator, App & Web Application",
      company_name: "MIST Innovation Club (MIC)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Apr 2022 - Mar 2023",
      points: [
        "Conducted workshops on basic Web Development Programming Languages - Hyper Text Markup Language (HTML), Cascading Style Sheet (CSS), and Bootstrap to give newly admitted students an overview of web development.",
        "Took the initiative to create an all-club website to make all information available to the students about past events, former members, present members, and future activities in various clubs accessible.",
        "Provided essential mentorship and support to the club members, correcting their issues and facilitating professional growth.",
      ],
    },
    {
      title: "Member, Mentor",
      company_name: "MIST Computer Club (MCC)",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2021 - Mar 2023",
      points: [
        "Conducted sessions on different algorithms and competitive programming problems.",
        "Organized and volunteered in several events like the National Collegiate Programming Contest (NCPC) 2020, Campus Hour Programs, LeetCon 2023, Independence Day Programming Contest (IDPC) 2023, etc.",
      ],
    },
    {
      title: "Member, Software and Communication Team",
      company_name: "MIST Mongol Barota",
      icon: meta,
      iconBg: "#383E56",
      date: "Jul 2020 - Jan 2021",
      points: [
        "Worked with MIST Mongol Barota, a rover developing team of MIST, and participated in the International Rover Competition as a Software and Communication Team member.",
      ],
    }
  ];
  
  const testimonials = [
    {
      title: "Microsoft Azure AI Fundamentals",
      image: microsoft,
      link: "https://shorturl.at/SPtR0",
    },
    {
      title: "Machine Learning with Python",
      image: linkedin,
      link: "https://drive.google.com/file/d/10vRVJ4acNHXHC-ic4ZdP8aj9JMn32uT0/view",
    },
    {
      title: "Problem Solving (Basic)",
      image: hackerrank,
      link: "https://www.hackerrank.com/certificates/a4336e405dde",
    },
    {
      title: "Cryptography and Information Theory",
      image: coursera,
      link: "https://shorturl.at/ZPsPL",
    },
    {
      title: "Data Analysis in Excel",
      image: datacamp,
      link: "https://shorturl.at/L9eju",
    },
    {
      title: "ICPC Dhaka Regional",
      image: icpc,
      link: "https://drive.google.com/file/d/1ZGJRdELeY1XXs7jj1yZsov1_3h2Ip4be/view?usp=sharing",
    },
  ];
  
  
  
  const projects = [
    {
      name: "NextGen Wheelchair: A Semi-Autonomous Solution for Disable People Using Head Motion",
      description:
        "Developed and manufactured a cutting-edge wheelchair prototype for individuals with mobility issues to drive independently.",
      tags: [
        {
          name: "OpenCV",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "white-text-gradient",
        },
        {
          name: "JSON",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ayon037/NextGenWheelchair-2.0",
    },
    {
      name: "CVCBC Predictor: Detection of CoronaVirus Using CBC Blood Information",
      description:
        "Investigated and clarified the possible advantages of using Complete Blood Count (CBC) in addition to PCR in the COVID-19 diagnostic environment by analyzing the CBC blood cell information using different Machine Learning algorithms.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Google Colab",
          color: "green-text-gradient",
        },
        
      ],
      image: jobit,
      source_code_link: "https://github.com/ayon037/Ayon-202014037.github.io/blob/main/Covid_Detection(Brasil).ipynb",
    },
    {
      name: "University Student Mental Health Classification",
      description:
        "Created an AI Model to estimate university students' levels of depression based on several academic parameters. Collected information from 239 students regarding various academic aspects and applied three machine learning models.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Google Colab",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ayon037/Ayon-202014037.github.io/blob/main/University_Students_Mental_Health_Classification_(Group_A3).ipynb",
    },
    {
      name: "Gym Management System",
      description:
        "Developed a database management system to keep track of all information or records related to the gym sector. Dashboards for different users like employee, member, equipment, maintenance, income, etc. were created. The accounts were made secure to provide safety and security to the system.",
      tags: [
        {
          name: "Oracle",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "white-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "JSON",
          color: "blue-text-gradient",
        },
        {
          name: "JQuery",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/sayedulabrar/projectgym",
    },
    {
      name: "Money Manager",
      description:
        "Developed a web application to track all kinds of personal expenses of different individuals. Created unique user accounts to enable individuals to track expenses, monitor savings, and strategize future purchases, enhancing personal financial management.",
      tags: [
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Eclipse",
          color: "blue-text-gradient",
        },
        {
          name: "Netbeans",
          color: "pink-text-gradient",
        },
      ],
      image: Money_Manager,
      source_code_link: "https://github.com/ayon037/Money_Manager",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };