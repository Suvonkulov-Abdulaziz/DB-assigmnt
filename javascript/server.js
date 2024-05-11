const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const pool = new Pool({
    user: 'felixnowman',
    host: 'localhost',
    database: 'postgres',
    password: '12345678',
    port: 5432,
});

app.get('/users', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM "User"');
        res.json(rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const result = await pool.query('INSERT INTO "User" (Username, Email, Password) VALUES ($1, $2, $3) RETURNING *', [username, email, password]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM "User" WHERE Email = $1 AND Password = $2', [email, password]);
        if (result.rows.length > 0) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
