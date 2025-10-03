document.addEventListener("DOMContentLoaded", () => { //En esta línea use IA para preparar el archivo HTML
  const form = document.getElementById("formulario-contacto");

  form.addEventListener("submit", function(e) { //En esta línea use IA porque se recargaba la página
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
    form.reset();
  });
}
);
