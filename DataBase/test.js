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

  $(document).ready(function() {
    let offset = 0;

    function loadMoreContent() {
        $.ajax({
            url: '/load-more',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ offset: offset }),
            success: function(response) {
                response.forEach(item => {
                    // Append the fetched content to the container
                    $('#content-container').append(`<div class="content-item"><img src="${item.image}"><p>${item.text}</p></div>`);
                });
                offset += response.length;
            },
            error: function() {
                console.log('Error fetching data from server');
            }
        });
    }

    $('#load-more-btn').click(function() {
        loadMoreContent();
    });
});
