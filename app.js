// Configuración de la aplicación de Express
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Importamos las rutas de las páginas
var indexRouter = require('./routes/index');

var app = express();

// Motor de plantillas: EJS, con las vistas en la carpeta /views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Muestra en consola cada petición (útil para depurar)
app.use(logger('dev'));
// Permite leer datos en JSON y de formularios (lo usaremos en la Entrega 2)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Archivos estáticos: CSS, JS del navegador e imágenes
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de la aplicación
app.use('/', indexRouter);

// Si ninguna ruta coincide, creamos un error 404 y lo pasamos al gestor de errores
app.use(function(req, res, next) {
  next(createError(404));
});

// Gestor de errores (solo debe haber uno, y va el último)
app.use(function(err, req, res, next) {
  // Variables que usa la vista error.ejs
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.status = err.status || 500;

  // Código HTTP de la respuesta y renderizado de la página de error
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;