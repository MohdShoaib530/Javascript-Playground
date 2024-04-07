const express = require('express');
const app = express();

const port = 3000;

// Define a route for the homepage
app.get('/', (req, res) => {
  res.json({ msg: "I am homepage" });
});

// Define a route for the about page
app.get('/about', (req, res) => {
  res.json({ msg: "I am about page" });
});

// Define a route for the contact page
app.get('/contact', (req, res) => {
  res.json({ email: "support@pwskills.com" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
