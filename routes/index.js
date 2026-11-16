// Rutas de las páginas principales
var express = require('express');
var router = express.Router();

// Cada ruta renderiza una vista EJS de la carpeta /views.
// res.render('index') busca views/index.ejs

// Página de inicio
router.get('/', function(req, res) {
  res.render('index');
});

// Página de login
router.get('/login', function(req, res) {
  res.render('login');
});

// Página de contacto
router.get('/contacto', function(req, res) {
  res.render('contacto');
});

module.exports = router;