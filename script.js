const STORAGE_KEY = "mallaAprobados";

const malla = [ /* igual que antes: toda la malla curricular aquí */ ];

// Guardamos el estado de ramos aprobados (id) como Set
let aprobados = new Set();

// Referencia al contenedor principal
const mallaDiv = document.getElementById("malla");

// Función para guardar en localStorage
function guardarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(aprobados)));
}

// Función para cargar estado desde localStorage
function cargarEstado() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      const arrayIds = JSON.parse(data);
      aprobados = new Set(arrayIds);
    } catch {
      aprobados = new Set();
    }
  }
}

// Crear ramo HTML similar a antes, pero al crear activar si está aprobado
function crearRamo(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.id = ramo.id;

  // Si el ramo fue aprobado anteriormente, activar
  if (aprobados.has(ramo.id)) {
    div.classList.add("activo");
  } else if (!ramo.req) {
    // Sin prerequisitos, activo pero botón habilitado
    div.classList.add("activo");
  }

  const titulo = document.createElement("h4");
  titulo.textContent = ramo.nombre;
  div.appendChild(titulo);

  const btn = document.createElement("button");
  btn.textContent = "Aprobar";

  // El botón está deshabilitado si ya aprobado o si tiene prerequisitos no cumplidos
  const deshabilitarBtn =
    aprobados.has(ramo.id) ||
    (ramo.req && !ramo.req.every((reqId) => aprobados.has(reqId)));

  btn.disabled = deshabilitarBtn;
  btn.onclick = () => aprobarRamo(ramo.id);
  div.appendChild(btn);

  return div;
}

// Función para aprobar ramo y actualizar estado
function aprobarRamo(id) {
  aprobados.add(id);
  guardarEstado();

  actualizarEstadoUI();
}

// Función para actualizar la UI según el estado "aprobados"
function actualizarEstadoUI() {
  malla.forEach((ano) => {
    ano.semestres.forEach((semestre) => {
      semestre.ramos.forEach((r) => {
        const div = document.getElementById(r.id);
        if (!div) return;

        const btn = div.querySelector("button");

        if (aprobados.has(r.id)) {
          div.classList.add("activo");
          btn.disabled = true;
        } else {
          // Revisa si puede activarse (prerequisitos cumplidos)
          const prereqs = r.req || [];
          const puedeActivar = prereqs.every((reqId) => aprobados.has(reqId));

          if (puedeActivar && (!r.req || r.req.length === 0)) {
            div.classList.add("activo");
          } else {
            div.classList.remove("activo");
          }

          btn.disabled = !puedeActivar;
        }
      });
    });
  });
}

// Busca ramo por id
function encontrarRamo(id) {
  for (const ano of malla) {
    for (const semestre of ano.semestres) {
      for (const ramo of semestre.ramos) {
        if (ramo.id === id) return ramo;
      }
    }
  }
  return null;
}

// Renderiza toda la malla curricular
function renderMalla() {
  mallaDiv.innerHTML = "";

  malla.forEach((ano) => {
    const divAno = document.createElement("div");
    divAno.classList.add("año");

    const h2Ano = document.createElement("h2");
    h2Ano.textContent = `Año ${ano.año}`;
    divAno.appendChild(h2Ano);

    ano.semestres.forEach((semestre) => {
      const divSemestre = document.createElement("div");
      divSemestre.classList.add("semestre");

      const h3Semestre = document.createElement("h3");
      h3Semestre.textContent = semestre.nombre;
      divSemestre.appendChild(h3Semestre);

      const ramosCont = document.createElement("div");
      ramosCont.classList.add("ramos-container");

      semestre.ramos.forEach((ramo) => {
        const ramoDiv = crearRamo(ramo);
        ramosCont.appendChild(ramoDiv);
      });

      divSemestre.appendChild(ramosCont);
      divAno.appendChild(divSemestre);
    });

    mallaDiv.appendChild(divAno);
  });

  actualizarEstadoUI();
}

// Inicializar app
function init() {
  cargarEstado();
  renderMalla();
}

init();
