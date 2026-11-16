# GameCollection

Aplicación web para gestionar una colección de videojuegos con soporte para múltiples usuarios.

## Tecnologías
- Node.js y Express
- EJS como motor
- HTML, CSS y JavaScript

## Instalación y ejecución
1. Clona el repositorio:
   git clone https://github.com/OmarTagnaout/GameCollection.git
2. Instala las dependencias:
   npm install
3. Arranca el servidor:
   npm start
4. Abre http://localhost:3000

## Páginas
- `/` Inicio
- `/login` Inicio de sesión 
- `/contacto` Contacto 
- `/error` Cualquier otra página

## Estructura del proyecto
gamecollection/
├── app.js                    Configuración de Express (vistas, middlewares, rutas y errores)
├── bin/
│   └── www                   Arranque del servidor HTTP (puerto y gestión de errores)
├── routes/
│   └── index.js              Rutas de las páginas
├── views/                    Plantillas EJS
│   ├── index.ejs
│   ├── login.ejs
│   ├── contacto.ejs
│   └── error.ejs
├── data/                     Reservada para los archivos JSON de la Entrega 2
├── docs/
│   └── historias-usuario.md
├── public/                   Archivos estáticos que descarga el navegador
│   ├── stylesheets/          CSS dividido por componentes
│   │   ├── style.css         Importa el resto de hojas de estilo
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── steps.css
│   │   ├── games.css
│   │   ├── forms.css
│   │   ├── not-found.css
│   │   └── footer.css
│   ├── javascripts/
│   │   └── app.js            JavaScript del navegador (simulación de formularios)
│   └── images/
├── package.json
└── README.md

## Historias de usuario
- Las historias de usuario están en [`docs/historias-usuario.md`](docs/historias-usuario.md).

## Decisiones de diseño (DCU)
- Navegación idéntica en todas las páginas, con la página actual resaltada
- Formularios con etiquetas, mensajes de error y confirmación visibles
- Accesibilidad: enlace "saltar al contenido", foco visible, contraste suficiente, uso de teclado
- Diseño adaptable a móvil

## Autores
- Omar Tagnaout 
- Francisco Rojo

## Enlaces
- Aplicación desplegada: https://gamecollection-x2lk.onrender.com/
