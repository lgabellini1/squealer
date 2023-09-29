const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

// Connessione a MongoDB
mongoose.connect('mongodb://orazio2014:orazio2014@cluster0.nzk477j.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.error('Errore nella connessione a MongoDB:', error);
});
db.once('open', () => {
  console.log('Connesso con successo a MongoDB!');
});


app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
