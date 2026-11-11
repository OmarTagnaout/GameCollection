// Limpia la consola para que los mensajes de depuración se lean mejor
console.clear()
// Mensaje inicial para comprobar que el script se ha cargado
console.log("App starting...")

// ---------- Elementos del DOM ----------
// Formulario de login (solo existe en /login; en el resto de páginas vale null)
const login_form = document.querySelector("form.login-form")
// Formulario de contacto (solo existe en /contacto)
const contact_form = document.querySelector("form.contact-form")
// Párrafo donde se muestran los avisos de los formularios
const form_message = document.querySelector("p.form-message")

// ---------- Funciones auxiliares ----------
// Muestra un mensaje bajo el formulario. "type" puede ser "ok" o "error"
const show_message = (text, type) => {
    // Escribimos el texto dentro del párrafo
    form_message.textContent = text
    // Quitamos el estilo anterior y aplicamos el nuevo
    form_message.classList.remove("ok", "error")
    form_message.classList.add(type)
}

// Devuelve true si algún campo obligatorio (required) está vacío
const has_empty_fields = (form) => {
    // Seleccionamos todos los campos marcados como obligatorios
    const required_fields = form.querySelectorAll("[required]")
    // Convertimos la lista a array y comprobamos si alguno está vacío
    return [...required_fields].some((field) => !field.value.trim())
}

// ---------- Formulario de login ----------
// El "?." evita errores en las páginas donde este formulario no existe
login_form?.addEventListener("submit", (event) => {
    // Evita que el navegador envíe el formulario y recargue la página
    event.preventDefault()
    console.log("Login enviado")

    // Si falta algún dato, avisamos y salimos
    if (has_empty_fields(login_form)) {
        show_message("Por favor, rellena usuario y contraseña.", "error")
        return
    }
    // Simulación: todavía no hay backend (llegará en la Entrega 2)
    show_message("Simulación: inicio de sesión correcto. El backend se conectará en la Entrega 2.", "ok")
})

// ---------- Formulario de contacto ----------
contact_form?.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Contacto enviado")

    if (has_empty_fields(contact_form)) {
        show_message("Por favor, rellena todos los campos.", "error")
        return
    }
    show_message("Simulación: mensaje enviado. ¡Gracias por contactarnos!", "ok")
    // Vaciamos el formulario tras el envío simulado
    contact_form.reset()
})