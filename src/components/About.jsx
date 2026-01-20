import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
       I'm Mohiuddin Bilwal, a Computer Science and Engineering graduate from Military Institute of Science and Technology (MIST) 
       with hands-on experience as a Junior Software Engineer at TechnoNext Software Limited. I specialize in full-stack development 
       using Ruby on Rails, PostgreSQL, and modern web technologies.

       During my internship at BariKoi Maps, I developed desktop applications for 360° image processing and built APIs for 
       real-time data visualization. I have strong programming skills in Python, Java, C++, and JavaScript, with experience 
       in machine learning, web development, and database management.

       I'm passionate about solving real-world problems through technology. My notable projects include developing a 
       semi-autonomous wheelchair system using computer vision, building AI-powered website navigation tools, and creating 
       comprehensive management systems. I've participated in competitive programming contests including ICPC Dhaka Regional 
       and have solved over 1,500 coding problems.

       As a former team coordinator at MIST Innovation Club and teaching assistant at MIST Computer Club, I have experience 
       mentoring students and organizing technical workshops. I was part of the MIST Mongol Barota team that achieved 1st 
       position globally in the University Rover Challenge 2021.

       I'm Microsoft Azure AI Fundamentals certified and continuously learning new technologies. I'm looking for opportunities 
       to contribute to innovative software development projects where I can apply my technical skills and grow as a professional 
       software engineer.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
