const loginForm = document.getElementById('login-form');
const contactForm = document.getElementById('contact-form');
const message = document.getElementById('form-message');

function showMessage(text, type) {
  message.textContent = text;
  message.className = `message ${type}`;
}

function hasEmptyFields(form) {
  return [...form.querySelectorAll('[required]')].some(f => !f.value.trim());
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (hasEmptyFields(loginForm)) {
      showMessage('Por favor, rellena usuario y contraseña.', 'error');
      return;
    }
    showMessage('Simulación: inicio de sesión correcto. (El backend se conectará en la Entrega 2)', 'ok');
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (hasEmptyFields(contactForm)) {
      showMessage('Por favor, rellena todos los campos.', 'error');
      return;
    }
    showMessage('Simulación: mensaje enviado. ¡Gracias por contactarnos!', 'ok');
    contactForm.reset();
  });
}