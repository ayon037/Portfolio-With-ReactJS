import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { publications } from '../constants';

const PublicationCard = ({ index, title, authors, venue, year, link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-6 rounded-3xl w-full h-[280px] flex flex-col"
  >
    <div className="flex-1">
      <h3 className="text-white font-bold text-[16px] mb-3 leading-tight">{title}</h3>
      <p className="text-secondary text-[12px] mb-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: authors }}></p>
      <p className="text-white text-[13px] mb-2 font-medium">{venue}</p>
      <p className="text-secondary text-[12px] mb-3">{year}</p>
    </div>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-tertiary py-2 px-4 rounded-lg text-white text-[14px] font-medium text-center hover:bg-secondary transition-colors cursor-pointer"
    >
      View Paper
    </a>
  </motion.div>
);

const Publications = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Research Work
          </p>
          <h2 className={styles.sectionHeadText}>
            Publications.
          </h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {publications.map((publication, index) => (
          <PublicationCard
            key={index}
            index={index}
            {...publication}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Publications, "publications");