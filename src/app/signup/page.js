'use client'
import { useState } from "react";
export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        mobile: '',    
    });
    const [message, setMessage] = useState('');
    const handleformChange = (event) => {
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
            const data = await response.json();
            if (data.success) {
              setMessage('User added successfully');
            } else {
              setMessage(data.message);
            }
    };


    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleformChange}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleformChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleformChange}
                required
              />
            </div>
            <div>
              <label>Mobile</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleformChange}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      );
    }