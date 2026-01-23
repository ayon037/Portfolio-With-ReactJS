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
    udacity,
    aspire,
    ruby_on_rails,
    redis,
    technonext,
    barikoi,
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
      id: "works",
      title: "Projects",
    },
    {
      id: "publications",
      title: "Publications",
    },
    {
      id: "feedbacks",
      title: "Certificates",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
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
      name: "Ruby on Rails",
      icon: ruby_on_rails,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Redis",
      icon: redis,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Junior Software Engineer",
      company_name: "TechnoNext Software Limited",
      icon: technonext,
      iconBg: "#383E56",
      date: "July 2025 - Present",
      points: [
        "Developed and implemented new features for production level projects and reviewed existing codebases to deliver optimized and maintainable solutions.",
        "Conducted research and development, market analysis, and code optimization to improve memory efficiency and data retrieval performance.",
        "Collaborated with team leads and managers to analyze user requirements and define efficient strategies.",
        "Tech Stack: Ruby on Rails, PostgreSQL, Redis, Docker, JavaScript, Tailwind CSS"
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "BariKoi Maps",
      icon: barikoi,
      iconBg: "#E6DEDD",
      date: "May 2025 - July 2025",
      points: [
        "Converted 360° videos into 360° images using Python for efficient image processing in mapping applications.",
        "Built desktop application with PyQt, PostgreSQL, and FastAPI to process and visualize 360° images in real time.",
        "Integrated HTTP protocols and JSON-based communication for smooth client-server interaction.",
        "Tech Stack: Python, PostgreSQL, JavaScript, FastAPI, Image Processing"
      ],
    },
    {
      title: "Assistant Treasurer, Teaching Assistant",
      company_name: "MIST Computer Club (MCC)",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2021 - Mar 2023",
      points: [
        "Conducted sessions on algorithms and competitive programming problems.",
        "Organized and volunteered in programming contests including NCPC 2020, LeetCon 2023, and IDPC 2023.",
      ],
    },
    {
      title: "Team Coordinator, App & Web Development",
      company_name: "MIST Innovation Club (MIC)",
      icon: tesla,
      iconBg: "#383E56",
      date: "Apr 2022 - Mar 2023",
      points: [
        "Conducted workshops on HTML, CSS, and Bootstrap for newly admitted students.",
        "Led initiative to create an all-club website for student information and activities.",
        "Provided mentorship and support to club members for professional growth.",
      ],
    }
  ];
  
  const testimonials = [
    {
      title: "Microsoft Azure AI Fundamentals",
      image: microsoft,
      link: "https://learn.microsoft.com/en-us/users/mohiuddinbilwal-0238/credentials/818d0a58be99fff9?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    },
    {
      title: "Introducing Generative AI with AWS",
      image: udacity,
      link: "https://drive.google.com/file/d/1VVYz8XeAfpgzRxIKK-VUfL6fzF_Uphg7/view",
    },
    {
      title: "Problem Solving (Basic)",
      image: hackerrank,
      link: "https://www.hackerrank.com/certificates/a4336e405dde",
    },
    {
      title: "Data Analysis in Excel",
      image: datacamp,
      link: "https://shorturl.at/L9eju",
    },
    {
      title: "ICPC Dhaka Regional Participant",
      image: icpc,
      link: "https://drive.google.com/file/d/1ZGJRdELeY1XXs7jj1yZsov1_3h2Ip4be/view?usp=sharing",
    },
    {
      title: "Aspire Leaders Program Graduate",
      image: aspire,
      link: "https://drive.google.com/file/d/1lb3mhCeaQgLNAkUB1AjImEl2HoCVZeBT/view",
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
        "Investigated and clarified the possible advantages of using Complete Blood Count (CBC) in addition to PCR in the COVID-19 diagnostic environment by analyzing the CBC blood cell information.",
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
  
  const publications = [
    {
      title: "ProfAgent: Profiling-Guided Agentic Reasoning for Adaptive Model Optimization",
      authors: "Sadegh Jafari, Aishwarya Sarkar, <strong>Mohiuddin Bilwal</strong>, Ali Jannesari",
      venue: "arXiv preprint",
      year: "2024",
      link: "https://www.arxiv.org/abs/2509.05584",
    },
    {
      title: "Proposing and Evaluating a Modified Keyboard Layout for One-Handed Users",
      authors: "<strong>Mohiuddin Bilwal</strong>, Sayedul Abrar, Zinia Sultana, Jamal Uddin Tanvin, Rafi Md Ragib Shahriar, Md. Mostafizur Rahman, Muhammad Nazrul Islam",
      venue: "27th International Conference on Computer and Information Technology (ICCIT 2024)",
      year: "2024",
      link: "https://ieeexplore.ieee.org/document/11021771",
    },
    {
      title: "A Multi-Modal Assistive Robot Navigation System for Physically Impaired Users",
      authors: "<strong>Mohiuddin Bilwal</strong>, Jamal Uddin Tanvin, Shekh Md Saifur Rahman, M Rayhan Ferdous Faisal, Abrar Faiyaz Khan, Sheikh Easin Arafat, M. Akhtaruzzaman",
      venue: "IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN 2025)",
      year: "2025",
      link: "https://ieeexplore.ieee.org/document/11171861",
    },
  ];

  export { services, technologies, experiences, testimonials, publications, projects };