const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connessione a MongoDB
mongoose.connect('mongodb://localhost:27017/mearnDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
