const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Create a PostgreSQL client pool
const pool = new Pool({
  user: 'felixnowman',
  host: 'localhost',
  database: 'posgres',
  password: '12345678',
  port: 5432,
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle user registration
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate input (e.g., check if username and email are not empty)
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    // Insert user data into the "User" table
    const result = await pool.query('INSERT INTO "User" (Username, Email, Password) VALUES ($1, $2, $3) RETURNING *', [username, email, password]);

    // Return the inserted user data
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const registerUser = async () => {
    const username = 'exampleuser';
    const email = 'user@example.com';
    const password = 'password123';
  
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to register user');
      }
  
      const data = await response.json();
      console.log('User registered successfully:', data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  
  registerUser();
  