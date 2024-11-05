// src/app/api/login/route.js
import { query } from "../../../../lib/db";
import bcrypt from "bcryptjs"; // Import bcryptjs

export async function POST(req) {
    const { email, password } = await req.json(); // Get the request body

    try {
        const existingUser = await query('SELECT * FROM users WHERE email = $1', [email]);
        
        if (existingUser.rows.length === 0) {
            return new Response(JSON.stringify({ success: false, message: 'User not found.' }), {
                status: 404,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        // Verify the password
        const isPasswordValid = await bcrypt.compare(password, existingUser.rows[0].password);
        
        if (!isPasswordValid) {
            return new Response(JSON.stringify({ success: false, message: 'Invalid password.' }), {
                status: 401,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        // Return success and the username
        return new Response(JSON.stringify({
            success: true,
            message: 'Login successful!',
            username: existingUser.rows[0].username // Send back the username
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: 'Database error. Please try again.' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}