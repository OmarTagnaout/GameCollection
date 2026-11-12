# Guion del vídeo – Entrega 1 · GameCollection

**Duración estimada:** 6-7 minutos · **Equipo:** 2 personas (Persona A y Persona B)

> Cambia "Persona A / Persona B" por vuestros nombres y repartid las partes como queráis. Lo importante es que **hablen los dos** y que cada uno explique código que entienda.

## Leyenda

| Icono | Significa |
|---|---|
| 🗣️ **LEER** | Texto que puedes leer casi tal cual (léelo con naturalidad, no como un robot). |
| 📘 **EXPLICAR** | Ideas que debes entender y contar **con tus palabras**. No se lee. |
| 🖥️ **PANTALLA** | Qué tienes que enseñar mientras hablas. |
| 💡 **ENTENDER** | Apuntes para ti, no se dicen en el vídeo. |

---

## Antes de grabar (checklist)

- [ ] Abrir la URL de Render 2-3 minutos antes (en el plan gratuito la app se "duerme" y la primera carga tarda).
- [ ] Tener abiertos en Cursor: `server.js`, `public/javascripts/app.js`, `public/stylesheets/variables.css`, `footer.css`, `header.css`, `base.css`, `views/login.html` y `docs/historias-usuario.md`.
- [ ] Tener el repositorio de GitHub abierto en el navegador.
- [ ] Tener la app abierta en **local** (`npm start`) y en **Render**.
- [ ] Cerrar notificaciones, chats y pestañas personales.
- [ ] Ensayar una vez completo. Si os trabáis, no pasa nada: es mejor que suene natural.
- [ ] Probar el audio 10 segundos antes de grabar todo.

---

## PARTE 0 · Presentación (≈ 20 s) — Persona A

🖥️ **PANTALLA:** página de inicio de la app desplegada en Render.

🗣️ **LEER:**
> "Hola, somos [NOMBRE A] y [NOMBRE B]. Esta es la Entrega 1 de nuestro proyecto, GameCollection, una aplicación web para gestionar colecciones de videojuegos con varios usuarios. En este vídeo vamos a enseñar las historias de usuario, la aplicación funcionando, cómo hemos aplicado el diseño centrado en el usuario y, por último, el código."

---

## PARTE 1 · Historias de usuario (≈ 1 min) — Persona A

🖥️ **PANTALLA:** archivo `docs/historias-usuario.md` (en Cursor o en GitHub).

📘 **EXPLICAR** (con tus palabras):
- Qué es una historia de usuario: una frase corta que describe **qué necesita el usuario y para qué**, con el formato "Como [rol], quiero [acción], para [beneficio]".
- Los dos roles que hemos definido: **visitante** (sin sesión) y **usuario registrado** (con colección).
- Elige 3 o 4 historias y cuéntalas: iniciar sesión, ver mi colección, ver el detalle de una copia y cerrar sesión.
- Remata con que **de las historias salieron las páginas** que hemos construido.

🗣️ **LEER (cierre de la parte):**
> "En esta primera entrega implementamos las historias que no necesitan backend, como conocer la aplicación, navegar y contactar. El resto, como ver la colección o el detalle de una copia, lo desarrollaremos en la Entrega 2."

💡 **ENTENDER:** el enunciado pide historias sobre "iniciar sesión, visualizar un listado de copias propias, acceder al detalle de una copia, cerrar sesión, entre otras". Cubrirlas en el documento aunque todavía no estén programadas es correcto: esta entrega es de **diseño y prototipo**.

---

## PARTE 2 · Demo de la aplicación (≈ 1 min 30 s) — Persona B

🖥️ **PANTALLA:** aplicación desplegada en Render (usa la URL pública, no localhost).

Sigue este orden y di una frase corta en cada paso:

1. **Inicio**
   🗣️ "Esta es la página de inicio: explica qué es la aplicación, cómo funciona y muestra un listado ilustrativo de videojuegos recientes."
2. **Navegación**
   🗣️ "El menú es el mismo en todas las páginas y la página actual aparece subrayada. Voy a Iniciar sesión."
3. **Login vacío**
   🗣️ "Si pulso Entrar sin rellenar nada, aparece un mensaje de error."
4. **Login relleno**
   🗣️ "Si relleno usuario y contraseña, se simula el inicio de sesión. Todavía no hay backend, eso llegará en la Entrega 2."
5. **Contacto**
   🗣️ "En Contacto ocurre lo mismo: si faltan campos avisa, y si está todo correcto confirma el envío simulado y vacía el formulario."
6. **Página 404**
   🗣️ "Si escribo una URL que no existe, aparece una página de error propia con un botón para volver al inicio."
7. **Móvil**
   🗣️ Reduce la ventana del navegador (o usa F12 → icono de móvil). "La web se adapta a pantallas pequeñas: las tarjetas se reorganizan y el pie de página se apila."

💡 **ENTENDER:** el enunciado pide páginas "totalmente navegables entre sí". Asegúrate de pasar por Inicio → Login → Contacto → Inicio sin usar el botón de "atrás" del navegador.

---

## PARTE 3 · DCU y accesibilidad (≈ 1 min) — Persona B

📘 **EXPLICAR** primero qué es DCU:
- **DCU = Diseño Centrado en el Usuario**: diseñamos pensando en quien va a usar la web, no en lo que le resulta cómodo al programador.
- El enunciado lo resume en tres ideas: **facilidad de uso**, **intuitividad** y **accesibilidad**.

🗣️ **LEER (versión base):**
> "Hemos aplicado los principios de DCU. Para la facilidad de uso, los formularios tienen etiquetas claras y avisos de error y confirmación. Para la intuitividad, el menú es el mismo en todas las páginas y la página actual aparece subrayada. Y para la accesibilidad, hemos añadido un enlace para saltar al contenido, un contorno visible al navegar con teclado, etiquetas asociadas a cada campo, mensajes que leen los lectores de pantalla y un diseño que se adapta a móvil."

🖥️ **PANTALLA** — enséñalo **en directo** mientras lo dices:

| Qué dices | Qué haces |
|---|---|
| Enlace "Saltar al contenido" | Recarga la página y pulsa **Tab una vez**: aparece un enlace amarillo arriba |
| Foco visible | Sigue pulsando **Tab**: cada enlace y botón muestra un contorno amarillo |
| Etiquetas asociadas a los campos | En el login, haz clic sobre el texto "Nombre de usuario": el cursor entra en el campo |
| Diseño adaptable | Reduce la ventana del navegador |

💡 **ENTENDER** (por qué importa la accesibilidad):
- Hay personas que **no pueden usar ratón** y navegan solo con teclado (Tab).
- Hay personas **ciegas** que usan un lector de pantalla, que lee las etiquetas y los avisos.
- Hay personas con problemas de visión que necesitan **buen contraste**.
- Una web accesible funciona para todos.

💡 **ENTENDER** (dónde está en el código, por si te preguntan):

| Característica | Dónde está |
|---|---|
| Saltar al contenido | `a.skip-link` en `base.css` y el enlace `<a class="skip-link" href="#contenido">` en el HTML |
| Foco visible | `:focus-visible` en `base.css` |
| Etiquetas asociadas | `<label for="username">` + `<input id="username">` |
| Avisos para lectores de pantalla | `aria-live="polite"` y `role="status"` en `p.form-message` |
| Página actual en el menú | `aria-current="page"` en el HTML y `&[aria-current="page"]` en `header.css` |
| HTML semántico | `header`, `nav`, `main`, `footer` y `lang="es"` |
| Contraste | Colores definidos en `variables.css` (texto claro sobre fondo oscuro) |
| Adaptable a móvil | `<meta name="viewport">`, rejilla `auto-fit` en `games.css` y `@media` en `footer.css` |

---

## PARTE 4 · Explicación del código (≈ 2 min 30 s)

> Esta es la parte que más pesa en la nota ("autoría y defensa"). Habla despacio, **señala las líneas con el ratón** y apóyate en los comentarios del código.

### 4.1 Estructura del proyecto y `server.js` (≈ 1 min) — Persona A

🖥️ **PANTALLA:** explorador de archivos de Cursor y después `server.js`.

📘 **EXPLICAR la estructura:**
- `views/`: las páginas HTML que envía el servidor.
- `public/`: lo que el navegador descarga directamente (CSS y JavaScript), dentro de `stylesheets/` y `javascripts/`.
- `docs/`: documentación, con las historias de usuario.
- `server.js`: el servidor de Express.

🗣️ **LEER (frase clave):**
> "Hemos separado `views`, donde están las páginas, de `public`, donde están los archivos estáticos. Esta separación nos prepara para la Entrega 2, donde las páginas pasarán a plantillas EJS."

📘 **EXPLICAR `server.js`** de arriba abajo:
1. `require('express')` y `require('path')`: importamos Express y el módulo `path` para construir rutas de archivos.
2. `PORT = process.env.PORT || 3000`: usa el puerto que asigna Render y, si no existe, el 3000 en local.
3. `app.use(express.static(...))`: convierte la carpeta `public` en pública. Por eso el HTML puede pedir `/stylesheets/style.css`.
4. `app.get('/', ...)`, `'/login'`, `'/contacto'`: **una ruta por página**; cada una responde con su HTML mediante `sendFile`.
5. El `app.use(...)` final: devuelve la página 404. **Va la última** porque Express evalúa las rutas en orden y solo debe llegar ahí si ninguna ha coincidido.
6. `app.listen`: arranca el servidor.

💡 **ENTENDER** (recorrido de una petición, por si te lo preguntan):
1. El navegador pide `/login`.
2. Express busca una ruta que coincida: `app.get('/login', ...)`.
3. Responde con `views/login.html`.
4. El HTML pide `/stylesheets/style.css` y `/javascripts/app.js`.
5. Esas peticiones las atiende `express.static`.
6. El navegador ejecuta `app.js` y el formulario cobra vida.

### 4.2 HTML y CSS (≈ 45 s) — Persona A o B

🖥️ **PANTALLA:** `views/login.html`, después `style.css`, `variables.css` y `footer.css`.

📘 **EXPLICAR el HTML:**
- Usamos etiquetas **semánticas** (`header`, `nav`, `main`, `footer`), que dan significado a cada zona y ayudan a los lectores de pantalla.
- Las clases siguen el formato `componente-elemento` (`header-navbar`, `footer-inner-col`, `form-field`), lo que hace el CSS más fácil de leer.

📘 **EXPLICAR el CSS:**
- Está **dividido por componentes**: `header.css`, `footer.css`, `forms.css`, etc.
- `style.css` solo hace `@import` del resto.
- Los colores están en `variables.css` como variables (`--background-color-dark`...) y se usan con `var(...)`. Para cambiar la paleta solo hay que tocar ese archivo.
- Usamos **anidamiento nativo**: dentro de `footer.footer` escribimos `a`, `ul` o `h4`, así las reglas del componente quedan agrupadas.

🗣️ **LEER (frase clave):**
> "Dividir el CSS por componentes nos da separación de responsabilidades: cada archivo hace una sola cosa, es más fácil de mantener y de reutilizar."

💡 **ENTENDER:** si te preguntan por qué `@import` va al principio de `style.css`: porque el CSS solo permite importar antes de cualquier otra regla.

### 4.3 `app.js` (≈ 1 min) — Persona B

🖥️ **PANTALLA:** `public/javascripts/app.js`.

📘 **EXPLICAR** siguiendo el orden del archivo:
1. **`querySelector`**: seleccionamos elementos con selectores CSS, como `form.login-form`. Lo usamos en lugar de `getElementById` porque es un único método que sirve para ids, clases y etiquetas, y es la convención que seguimos.
2. **`?.` (optional chaining)**: el mismo `app.js` se carga en todas las páginas, pero el formulario de login solo existe en `/login`. Con `?.` evitamos errores donde el elemento no existe (ahí vale `null`).
3. **`addEventListener("submit", ...)`**: escucha el envío del formulario.
4. **`event.preventDefault()`**: evita que el navegador envíe el formulario y recargue la página, para poder simular el envío nosotros.
5. **`has_empty_fields()`**: recorre los campos `required` y devuelve `true` si alguno está vacío.
6. **`show_message()`**: escribe el texto en `p.form-message` y le pone la clase `ok` o `error`, que cambia el color en `forms.css`.
7. **`contact_form.reset()`**: vacía el formulario tras el envío simulado.

🗣️ **LEER (frase clave):**
> "Es una simulación: todavía no hay backend. En la Entrega 2 validaremos las credenciales de verdad con sesiones."

💡 **ENTENDER:** si te preguntan por qué usas nombres con guion bajo (`login_form`, `show_message`): es el estilo `snake_case` que usa el proyecto de ejemplo del profesor. Lo importante es ser **consistentes**.

---

## PARTE 5 · Repositorio, despliegue y cierre (≈ 30 s) — Persona A

🖥️ **PANTALLA:** repositorio de GitHub (lista de commits) y la app en Render.

🗣️ **LEER:**
> "El código está en GitHub, con commits de los dos, y la aplicación está desplegada en Render, en esta URL: gamecollection-x2lk.onrender.com. Con esto cumplimos los requisitos de la Entrega 1: historias de usuario, tres páginas navegables, servidor con Node.js y Express, y una interfaz pensada para el usuario. En la Entrega 2 añadiremos plantillas EJS, persistencia con JSON y control de sesiones. Gracias por vuestra atención."

---

## Anexo 1 · Preguntas que te pueden hacer en la defensa

| Pregunta | Respuesta corta |
|---|---|
| ¿Por qué separáis `views` y `public`? | `public` es lo que el navegador puede descargar libremente; `views` son las páginas que sirve el servidor. Además prepara el paso a EJS. |
| ¿Qué hace `express.static`? | Convierte una carpeta en pública: cada archivo se sirve en la URL que coincide con su ruta dentro de esa carpeta. |
| ¿Por qué la ruta 404 va la última? | Express evalúa en orden; solo debe llegar ahí si ninguna otra ruta ha coincidido. |
| ¿Por qué `process.env.PORT`? | Render asigna el puerto por variable de entorno; en local usamos el 3000. |
| ¿Para qué sirve `preventDefault`? | Para impedir el comportamiento por defecto del formulario (enviar y recargar la página). |
| ¿Por qué `querySelector` y no `getElementById`? | Un único método con selectores CSS, válido para ids, clases y etiquetas; es la convención del proyecto. |
| ¿Qué es `?.`? | Optional chaining: si el elemento es `null`, no ejecuta y no da error. |
| ¿Qué ventaja tiene dividir el CSS? | Separación de responsabilidades, mantenimiento sencillo y reutilización. |
| ¿Qué es una variable CSS? | Un valor reutilizable (`--color`) definido en `:root` y usado con `var(--color)`. |
| ¿Qué es accesibilidad en vuestra web? | Enlace de salto, foco visible, etiquetas asociadas, `aria-live`, HTML semántico, contraste y diseño adaptable. |
| ¿Qué es DCU? | Diseñar pensando en el usuario: facilidad de uso, intuitividad y accesibilidad. |
| ¿Qué aportó cada uno al repositorio? | Responde con honestidad y concreción (qué archivos y qué commits). |

## Anexo 2 · Mini glosario

- **Express:** framework de Node.js para crear el servidor y las rutas.
- **Ruta:** asociación entre una URL y lo que responde el servidor.
- **Middleware:** función que se ejecuta entre la petición y la respuesta (`express.static` o el 404 son ejemplos).
- **Archivo estático:** archivo que se envía tal cual (CSS, JS, imágenes).
- **DOM:** representación de la página HTML que JavaScript puede leer y modificar.
- **Evento:** algo que ocurre en la página (clic, envío de formulario) y que JavaScript puede escuchar.
- **Semántica (HTML):** usar la etiqueta que describe el significado del contenido.
- **aria-live:** atributo que hace que un lector de pantalla anuncie los cambios de un elemento.

## Anexo 3 · Checklist de entrega

- [ ] `npm start` funciona sin errores
- [ ] Inicio, Login, Contacto y 404 se ven bien en local y en Render
- [ ] README creado y sin ningún "GameVault"
- [ ] Historias de usuario en `docs/`
- [ ] Commits de **los dos** en GitHub
- [ ] Vídeo subido con permisos de visualización abiertos (probado en ventana de incógnito)
- [ ] Entregados los tres enlaces: **repositorio**, **vídeo** y **app desplegada** (`https://gamecollection-x2lk.onrender.com/`)
