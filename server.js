const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const viewsPath = path.join(__dirname, 'views');

// Archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de las páginas
app.get('/', (req, res) => res.sendFile(path.join(viewsPath, 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(viewsPath, 'login.html')));
app.get('/contacto', (req, res) => res.sendFile(path.join(viewsPath, 'contacto.html')));

// Página 404 para rutas inexistentes
app.use((req, res) => res.status(404).sendFile(path.join(viewsPath, '404.html')));

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});