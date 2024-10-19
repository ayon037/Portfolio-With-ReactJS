import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({ index, image, title, link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <h3 className="text-white font-bold text-[24px] mb-2">{title}</h3> {/* Title of the certificate */}
    <a href={link} target="_blank" rel="noopener noreferrer"> {/* Anchor tag for clickable image */}
      <img
        src={image}
        alt={`certificate-${index}`}
        className="w-auto h-auto rounded-lg object-cover cursor-pointer" // Added cursor-pointer for better UX
      />
    </a>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Achievements
          </p>
          <h2 className={styles.sectionHeadText}>
            Certificates.
          </h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={index}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Feedbacks, "");
