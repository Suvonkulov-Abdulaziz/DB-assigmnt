// Import the 'pg' module
const { Client } = require('pg');

// Create a new PostgreSQL client
const client = new Client({
  user: 'felixnowman', // Your PostgreSQL database username
  host: 'localhost', // Your PostgreSQL database host (e.g., 'localhost')
  database: 'postgres', // Your PostgreSQL database name
  password: '12345678', // Your PostgreSQL database password
  port: 5432 // Your PostgreSQL database port (default is 5432)
});

// Connect to the PostgreSQL database
client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Error connecting to PostgreSQL database:', err));

// Perform database operations here...

// Close the PostgreSQL client when done
// client.end();
const query = `
SELECT * FROM Recipe;
`;

// Execute the query
client.query(query)
  .then(result => {
    console.log('Data from the "User" table:');
    result.rows.forEach(row => {
      console.log(row);
    });
  })
  .catch(err => console.error('Error executing query:', err))
  .finally(() => {
    // Close the PostgreSQL client when done
    client.end();
  });