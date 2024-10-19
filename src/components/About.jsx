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
       As a CSE graduate of Military Institute of Science and Technology (MIST), 
       I have over 2 years of experience in teaching basic data structure and 
       algorithms, honing leadership, teamwork, management, and communication skills. 
       I'm proficient in C++, Python, and Java programming languages with strong 
       computer science knowledge. I'm an AI enthusiast and have a great interest in 
       machine learning, deep learning, and Problem Solving. I'm certified in Microsoft 
       Azure AI Fundamentals, an open-source contributor at GSSoC' in 2023, attended 
       Aspire Leaders' Program Cohort 1 in 2024, ICPC Dhaka Regionalist of 2023, and 
       participated in SUST IUPC and NCPC Regional programming contests in 2024.

       I have worked on different projects during my academic programs including 
       web development, database management, app development, circuit designing, 
       integrated design projects etc. I was a member of the Software and Communications 
       team of 'MIST Mongol Barota' which became the virtual champion at the University 
       Rover Challenge (URC) in 2021, during the COVID pandemic. It was the first time 
       in Bangladesh that any institution achieved the first position in this competition. 
       I have also worked as a volunteer in different events like NCPC and LeetCon. 
       Currently, I'm enrolled in the Data Science Lab provided by WorldQuant University, 
       a renowned online university learning platform in the USA, where I'm learning about 
       how to deal with different time series data. Also, I'm working on some
      Natural Language Processing and Generative AI related projects.

       While working as an intern at the Bangladesh Computer Council (BCC), I gathered 
       some knowledge about Networking, Video Conferencing, Cybersecurity, and 
       other Software development fields where I found my passion in Software Development 
       fields. Furthermore, I'm passionate about data science and data analytics. I aim to 
       become a software engineer where I can contribute to building innovative solutions for 
       real-world problems.
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
