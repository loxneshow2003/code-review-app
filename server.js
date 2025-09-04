const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Bienvenue dans l\'application Code Review!');
});

app.listen(PORT, () => {
  console.log(`Le serveur est en cours d\'exécution sur le port ${PORT}`);
});