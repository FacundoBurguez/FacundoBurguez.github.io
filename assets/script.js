<script>
const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

function sendMessage(e){
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  // Simulación cliente (GitHub Pages no tiene backend). Puedes integrar EmailJS o Formspree si quieres envío real.
  const p = document.getElementById('form-status');
  p.textContent = '¡Gracias, ' + data.name + '! Tu mensaje ha sido registrado localmente.';
  form.reset();
  return false;
}
</script>
