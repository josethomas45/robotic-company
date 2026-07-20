import { motion } from 'framer-motion';
import './Gallery.css';

const images = [
  '/images/1.jpg', '/images/2.jpg', '/images/3.jpg',
  '/images/4.jpg', '/images/5.jpeg', '/images/6.jpg',
  '/images/7.jpg', '/images/8.jpg', '/images/9.jpeg'
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-wrapper container section"
    >
      <div className="gallery-header">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-gradient"
        >
          Gallery
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Discover humanoids like never before.
        </motion.p>
      </div>

      <motion.div 
        className="gallery-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {images.map((img, index) => (
          <motion.div 
            key={index} 
            className="gallery-item"
            variants={itemVariants}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <img src={img} alt={`Humanoid robotics showcase ${index + 1}`} loading="lazy" />
            <div className="img-overlay glass">
              <span>View Model {index + 1}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
