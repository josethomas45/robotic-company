import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-wrapper"
    >
      <section className="hero">
        <div className="hero-content container">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The Future is <span className="text-gradient">Now.</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience the next generation of humanoid robotics. Built for functional tasks, advanced research, and enhancing human potential.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-cta"
          >
            <Link to="/preorder" className="btn-primary">
              Preorder Now <ArrowRight size={18} style={{ verticalAlign: 'middle', marginLeft: '8px' }} />
            </Link>
          </motion.div>
        </div>
        <div className="hero-overlay"></div>
        {/* We use one of the existing images for the hero background, typically images/15.jpg was used before */}
        <div className="hero-bg" style={{ backgroundImage: "url('/legacy/images/15.jpg')" }}></div>
      </section>

      <section className="about section container">
        <div className="about-grid">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="about-text"
          >
            <h2 className="text-gradient">About Us</h2>
            <p>
              It has been suggested that very advanced robotics will facilitate the enhancement of ordinary humans. We are a group of keen engineers working hard to bring about change to the world by introducing highly capable humanoids.
            </p>
            <p>
              Our humanoid robots are designed with biomechanics and human cognition in mind, learning from sensory information to acquire perceptual and motor skills.
            </p>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="features-grid"
          >
            <div className="feature-card glass">
              <Cpu className="feature-icon" size={32} />
              <h3>Advanced AI</h3>
              <p>Cutting edge cognitive models.</p>
            </div>
            <div className="feature-card glass">
              <Zap className="feature-icon" size={32} />
              <h3>Agile Motion</h3>
              <p>Fluid, bipedal locomotion.</p>
            </div>
            <div className="feature-card glass">
              <Shield className="feature-icon" size={32} />
              <h3>Safe & Reliable</h3>
              <p>Built for human interaction.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cta-section">
        <motion.div 
          className="cta-card glass container"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Ready to meet your humanoid?</h2>
          <p>Preorder to win exclusive free gifts and deals.</p>
          <Link to="/preorder" className="btn-primary">Reserve Yours</Link>
        </motion.div>
      </section>
      
      <footer className="footer glass">
        <p>&copy; {new Date().getFullYear()} Boston Robotics. Developed by codeE. Reimagined for the future.</p>
      </footer>
    </motion.div>
  );
};

export default Home;
