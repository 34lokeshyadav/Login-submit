import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic here
    setIsSubmitted(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <motion.form
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', position: 'relative' }}
      >
        {!isSubmitted ? (
          <>
            <h1 className=' font-serif pl-16 pt-3 uppercase bg-green-400 '>Login Form</h1>
            <label>
              Username:
              <input style={{padding:"2px,", margin:"20px"}} type="text" name="username" value={formData.username} onChange={handleChange} />
            </label>
            <br />
            <label>
              Password:
              <input style={{padding:"2px,", margin:"20px"}} type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <br />
            <label>
              Email:
              <input style={{padding:"2px,", margin:"20px"}} type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                background: 'blue',
                color: 'white',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Submit
            </motion.button>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center' }}
          >
            <h2>Submitting...</h2>
          </motion.div>
        )}
      </motion.form>
    </div>
  );
};

export default App;
