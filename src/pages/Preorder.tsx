import { motion } from 'framer-motion';
import './Forms.css';

const Preorder = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="page-wrapper container section"
    >
      <div className="form-wrapper glass">
        <div className="form-header">
          <h1 className="text-gradient">Preorder</h1>
          <p>Reserve your humanoid today.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <input type="email" className="form-input" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="tel" className="form-input" placeholder="Mobile No. (optional)" />
          </div>
          
          <div className="form-group">
            <label style={{ color: 'var(--text-secondary)' }}>Gender</label>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="gender" value="male" /> Male
              </label>
              <label className="radio-label">
                <input type="radio" name="gender" value="female" /> Female
              </label>
              <label className="radio-label">
                <input type="radio" name="gender" value="other" /> Other
              </label>
            </div>
          </div>

          <div className="form-group">
            <select className="form-input select" required defaultValue="">
              <option value="" disabled>Choose Country</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uae">UAE</option>
              <option value="russia">Russia</option>
            </select>
          </div>

          <div className="form-group">
            <input type="text" className="form-input" placeholder="Humanoid Name (Give it a name!)" required />
          </div>

          <div className="form-group">
            <label style={{ color: 'var(--text-secondary)' }}>Humanoid Version</label>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="version" value="1" required /> Ver 1.0 (Standard)
              </label>
              <label className="radio-label">
                <input type="radio" name="version" value="2" /> Ver 2.0 (Advanced)
              </label>
            </div>
          </div>

          <label className="checkbox-label">
            <input type="checkbox" required />
            <span>I agree to the Terms and Conditions</span>
          </label>

          <button type="submit" className="btn-primary submit-btn">Confirm Preorder</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Preorder;
