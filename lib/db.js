// lib/db.js
import { Pool } from 'pg';

// Initialize a connection pool with the database URL from environment variables
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// A helper function to perform SQL queries
export const query = (text, params) => pool.query(text, params);