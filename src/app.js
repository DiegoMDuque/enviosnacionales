const express = require('express');
const app = express();

const path = require('path');

//Definiendo carpeta pública
app.use(express.static(path.join(__dirname, 'public')));

//Configurar el uso del motor de platillas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Mostrando index EJS...
app.get('/', function(req, res) {
    res.render('index');
});

module.exports = app;