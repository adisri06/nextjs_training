// src/app/api/signup/route.js
import { query } from "../../../../lib/db";

// Handle POST requests
export async function POST(req) {
  const { username, password, email, mobile } = await req.json(); // Get the request body

  try {
    const existingUser = await query('SELECT * FROM users WHERE email = $1', [email]);
    
    if (existingUser.rows.length > 0) {
      return new Response(JSON.stringify({ success: false, message: 'User already exists, please log in.' }), {
        status: 409,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      const newUser = await query('INSERT INTO users (username, email, password, mobile) VALUES ($1, $2, $3, $4) RETURNING *', [username, email, password, mobile]);
      return new Response(JSON.stringify({ success: true, message: 'User registered successfully!' }), {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    console.log("error in signup "+ error);
    return new Response(JSON.stringify({ success: false, message: 'Database error. Please try again.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}