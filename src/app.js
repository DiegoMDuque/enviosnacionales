const express = require('express');
const app = express();

const path = require('path');

//Definiendo carpeta pública
app.use(express.static(path.join(__dirname, 'public')));

//Configurando el uso del motor de platillas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Configurando la carpeta de rutas

//app.use('/', require('./routes'));

app.get('/login', function(req, res) {
    res.render('login');
});

app.get('/list', function(req, res) {
    res.render('list');
});

//Configurando rutas de USUARIOS
app.get('/users', function(req, res) {
    res.render('users/users');
});

app.get('/users/add', function(req, res) {
    res.render('users/addUser');
});

app.get('/users/user/1', function(req, res) {
    res.render('users/user');
});

app.get('/users/edit/1', function(req, res) {
    res.render('users/editUser');
});

app.get('/users/delete/1', function(req, res) {
    res.render('users/deleteUser');
});

//Configurando rutas de OFICINAS
app.get('/offices', function(req, res) {
    res.render('offices/offices');
});

app.get('/offices/add', function(req, res) {
    res.render('offices/addOffice');
});

app.get('/offices/office/1', function(req, res) {
    res.render('offices/office');
});

app.get('/offices/edit/1', function(req, res) {
    res.render('offices/editOffice');
});

app.get('/offices/delete/1', function(req, res) {
    res.render('offices/deleteOffice');
});

//Configurando rutas de OFICINAS
app.get('/guides', function(req, res) {
    res.render('guides/guides');
});

app.get('/guides/guide/1', function(req, res) {
    res.render('guides/guide');
});

module.exports = app;