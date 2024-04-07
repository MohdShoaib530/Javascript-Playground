const express = require('express');

const app = express();

let counter = 0; // Initial counter value

app.use(express.json());

// GET endpoint to get the current counter value
app.get('/', (req, res) => {
  res.json({ "counter": counter });
});

// POST endpoint to increment the counter
app.post('/increment', (req, res) => {
  counter += 1;
  res.json({ "counter": counter });
});

// POST endpoint to decrement the counter
app.post('/decrement', (req, res) => {
  counter -= 1;
  res.json({ "counter": counter });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
