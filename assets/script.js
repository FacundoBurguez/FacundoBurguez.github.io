const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

function sendMessage(e){
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  const p = document.getElementById('form-status');
  p.textContent = '¡Gracias, ' + data.name + '! Tu mensaje ha sido registrado localmente.';
  form.reset();
  return false;
}

const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
}

