'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import styles from '../css/signupform.module.css'

export default function Signup() {
  const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        mobile: '',    
    });
    const [showLogin, setShowLogin] = useState(false); 
    const [message, setMessage] = useState('');
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }))};

        const handleSubmit = async (event) => {
            event.preventDefault();
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              });          
              const result = await response.json();

              if (result.success) {
                  alert(result.message);
                  router.push('/login'); // Redirect to login after successful signup
              } else {
                  if (result.message === 'User already exists, please log in.') {
                      setShowLogin(true); // Show login button if user already exists
                  } else {
                      alert(result.message); // Show error message
                  }
              }
    };


    return (
      <div className={styles.formContainer}>
          <h1 className={styles.formTitle}>Sign Up</h1>
          <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                  <label htmlFor="username">Username</label>
                  <input
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div className={styles.formGroup}>
                  <label htmlFor="password">Password</label>
                  <input
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div className={styles.formGroup}>
                  <label htmlFor="mobile">Mobile</label>
                  <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                  />
              </div>
              <button type="submit" className={styles.submitButton}>Sign Up</button>
          </form>
          {/* {message && <p>{message}</p>} */}
          {showLogin && (
                <div className={styles.loginPrompt}>
                    <p>User already exists. Would you like to <span className={styles.loginLink} onClick={() => router.push('/login')}>Log In</span> instead?</p>
                </div>
            )}
      </div>
  );
}