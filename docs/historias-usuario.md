# Historias de usuario – GameCollection

## Roles
- **Visitante:** persona sin sesión iniciada.
- **Usuario registrado:** propietario de una colección de videojuegos.

## Historias

**HU-01 – Conocer la aplicación** (Visitante)
Como visitante, quiero ver una página de inicio que explique qué es GameCollection, para decidir si me interesa.
- Criterios: descripción clara, listado ilustrativo de juegos recientes, enlaces visibles a Login y Contacto.

**HU-02 – Iniciar sesión** (Usuario registrado)
Como usuario, quiero iniciar sesión con mi usuario y contraseña, para acceder a mi colección personal.
- Criterios: campos etiquetados, mensaje claro si faltan datos o son incorrectos, botón de envío visible.

**HU-03 – Ver mi colección** (Usuario registrado)
Como usuario, quiero ver el listado de mis copias de videojuegos, para saber qué tengo de un vistazo.
- Criterios: solo aparecen mis copias; cada una muestra título, plataforma y formato.

**HU-04 – Ver detalle de una copia** (Usuario registrado)
Como usuario, quiero acceder al detalle de una copia, para consultar su estado, formato y los datos del juego (género, año, desarrollador, descripción).
- Criterios: acceso desde el listado con un clic; botón para volver al listado.

**HU-05 – Conocer el estado de mis copias** (Usuario registrado)
Como usuario, quiero distinguir fácilmente si una copia está en buen estado, dañada o perdida, para organizar mi colección.
- Criterios: estados indicados con texto (no solo con color).

**HU-06 – Cerrar sesión** (Usuario registrado)
Como usuario, quiero cerrar sesión, para proteger mi colección en equipos compartidos.
- Criterios: opción visible en la navegación; tras cerrar sesión se vuelve al inicio.

**HU-07 – Proteger mi privacidad** (Usuario registrado)
Como usuario, quiero que nadie vea mis copias sin iniciar sesión ni acceda a las de otros usuarios, para mantener mi colección privada.
- Criterios: acceso directo por URL sin sesión redirige al login.

**HU-08 – Contactar con el equipo** (Visitante / Usuario)
Como visitante o usuario, quiero enviar un mensaje desde un formulario de contacto, para resolver dudas o reportar problemas.
- Criterios: campos nombre, correo y mensaje; confirmación visible tras el envío.

**HU-09 – Navegar con facilidad** (Todos)
Como usuario, quiero un menú coherente en todas las páginas, para moverme sin perderme.
- Criterios: página actual resaltada; funciona con teclado y en móvil.

**HU-10 – Accesibilidad** (Todos)
Como persona con necesidades de accesibilidad, quiero poder usar la web con teclado y lector de pantalla, para tener la misma experiencia que cualquier usuario.