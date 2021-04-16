const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Listening on Port ' + PORT + '...'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Homepage!');
});

app.get('/greeting', (req, res) => {
  res.render('/greeting');
});

app.get('/greetings/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Greetings, ${name}!`);
});
