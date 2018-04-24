const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();


hbs.registerPartials(path.join(__dirname,'../views/partials'));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.use('/styles', express.static(path.join(__dirname, '../styles')));
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/vent', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/vent.html'));
});

app.get('/relax', (req, res) => {
  res.render('relax');
});

app.get('/game', (req, res) => {
  res.render('game');
});

app.get('/advice', (req, res) => {
  res.render('advice');
});

app.get('/help', (req, res) => {
  res.render('help');
});

app.listen(3000, () => {
  console.log('server running on port 3000');
})