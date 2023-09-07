const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'your-db-user',
  host: 'localhost',
  database: 'your-db-name',
  password: 'your-db-password',
  port: 5432,
});

app.get('/users', async (req, res) => {
  const username = req.query.username;

  // Vulnerable code: directly interpolating user input into SQL query
  const query = `SELECT * FROM users WHERE username = '${username}'`;

  try {
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
