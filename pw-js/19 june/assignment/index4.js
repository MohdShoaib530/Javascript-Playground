const express = require('express');
const app = express();

const port = 3004;
const data = Math.floor(Math.random() * 100);
// Define a route for the homepage
app.get('/', (req, res) => {
  res.json({random:data});
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
