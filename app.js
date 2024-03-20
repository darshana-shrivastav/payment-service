const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

// Define a route for a sample API endpoint
app.get('/healthcheck', (req, res) => {
  const data = {
    response: 'OK',
    timestamp: new Date().toISOString(),
  };
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});