'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './loginForm.module.css'; // You can create a CSS module for styles

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showsignup, setshowsignup] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (result.success) {
            // Save username and email to local storage or session storage
            localStorage.setItem('username', result.username);
            localStorage.setItem('email', email);
            // Redirect to the home page
            router.push('/');
        } else {
            if (result.message === 'User not found.') {
                setshowsignup(true); // Show signup button if user not found
            } else {
                alert(result.message); // Show error message
            }        }
    };

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Login</button>
            </form>

            {showsignup && (
                <div className={styles.signupPrompt}>
                    <p>User not found. Would you like to <span className={styles.signupLink} onClick={() => router.push('/signup')}>Sign Up</span>?</p>
                </div>
            )}
        </div>
    );
}