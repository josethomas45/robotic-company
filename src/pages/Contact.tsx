import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import './Forms.css';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="page-wrapper container section"
    >
      <div className="form-wrapper glass" style={{ marginTop: '20px' }}>
        <div className="form-header">
          <h1 className="text-gradient">Get in touch</h1>
          <p>We'd love to hear from you.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" className="form-input" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea className="form-input textarea" placeholder="Message" required></textarea>
          </div>

          <button type="submit" className="btn-primary submit-btn">
            Send Message <Send size={18} style={{ verticalAlign: 'middle', marginLeft: '8px' }} />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
