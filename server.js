// Importamos Express y el módulo path (para construir rutas de archivos)
const express = require('express');
const path = require('path');

// Creamos la aplicación
const app = express();
// Puerto: el que asigne Render (process.env.PORT) o 3000 en local
const PORT = process.env.PORT || 3000;
// Carpeta donde están las páginas HTML
const viewsPath = path.join(__dirname, 'views');

// Sirve los archivos estáticos de /public (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de la página de inicio
app.get('/', (req, res) => res.sendFile(path.join(viewsPath, 'index.html')));
// Ruta del login
app.get('/login', (req, res) => res.sendFile(path.join(viewsPath, 'login.html')));
// Ruta de contacto
app.get('/contacto', (req, res) => res.sendFile(path.join(viewsPath, 'contacto.html')));

// Si ninguna ruta coincide, se muestra la página 404 (siempre va la última)
app.use((req, res) => res.status(404).sendFile(path.join(viewsPath, '404.html')));

// Arranca el servidor
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});