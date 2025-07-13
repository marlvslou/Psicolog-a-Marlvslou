document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".ramo button");
  const estado = JSON.parse(localStorage.getItem("estadoRamos")) || {};

  botones.forEach(boton => {
    const contenedor = boton.parentElement;
    const id = contenedor.dataset.id;
    const prer = contenedor.dataset.prer?.split(",") || [];

    // Verifica si tiene prerrequisitos no cumplidos
    const habilitado = prer.every(p => estado[p]);
    boton.disabled = !habilitado && prer.length > 0;

    // Marca como aprobado si ya fue guardado
    if (estado[id]) {
      boton.classList.add("aprobado");
      boton.disabled = false;
    }

    // Al hacer clic se aprueba y guarda
    boton.addEventListener("click", () => {
      estado[id] = true;
      localStorage.setItem("estadoRamos", JSON.stringify(estado));
      boton.classList.add("aprobado");
      boton.disabled = false;
      actualizarDisponibilidad();
    });
  });

  function actualizarDisponibilidad() {
    botones.forEach(boton => {
      const contenedor = boton.parentElement;
      const id = contenedor.dataset.id;
      const prer = contenedor.dataset.prer?.split(",") || [];
      const habilitado = prer.every(p => estado[p]);
      if (!estado[id]) {
        boton.disabled = !habilitado && prer.length > 0;
      }
    });
  }

  actualizarDisponibilidad();
});
