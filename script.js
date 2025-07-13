const STORAGE_KEY = "mallaAprobados";
let aprobados = new Set();

const malla = [
  {
    año: 1,
    semestres: [
      {
        nombre: "I Semestre",
        ramos: [
          { id: "procesos", nombre: "Procesos psicológicos", abre: ["social1", "ciclo1"] },
          { id: "historia", nombre: "Historia de la psicología" },
        ],
      },
      {
        nombre: "II Semestre",
        ramos: [
          { id: "social1", nombre: "Psicología social I", req: ["procesos"] },
          { id: "ciclo1", nombre: "Ciclo vital I", req: ["procesos"] },
        ],
      },
    ],
  }
];

const mallaDiv = document.getElementById("malla");

function guardarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...aprobados]));
}

function cargarEstado() {
  const guardado = localStorage.getItem(STORAGE_KEY);
  if (guardado) {
    aprobados = new Set(JSON.parse(guardado));
  }
}

function encontrarRamo(id) {
  for (let año of malla) {
    for (let semestre of año.semestres) {
      for (let ramo of semestre.ramos) {
        if (ramo.id === id) return ramo;
      }
    }
  }
  return null;
}

function aprobarRamo(id) {
  aprobados.add(id);
  guardarEstado();
  actualizarUI();
}

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.className = "ramo";
  div.id = ramo.id;

  const titulo = document.createElement("h4");
  titulo.textContent = ramo.nombre;
  div.appendChild(titulo);

  const boton = document.createElement("button");
  boton.textContent = "Aprobar";
  boton.onclick = () => aprobarRamo(ramo.id);
  div.appendChild(boton);

  div.boton = boton;
  return div;
}

function renderMalla() {
  mallaDiv.innerHTML = "";

  malla.forEach((añoObj) => {
    const divAño = document.createElement("div");
    divAño.className = "año";

    const h2 = document.createElement("h2");
    h2.textContent = `Año ${añoObj.año}`;
    divAño.appendChild(h2);

    añoObj.semestres.forEach((sem) => {
      const divSem = document.createElement("div");
      divSem.className = "semestre";

      const h3 = document.createElement("h3");
      h3.textContent = sem.nombre;
      divSem.appendChild(h3);

      const cont = document.createElement("div");
      cont.className = "ramos-container";

      sem.ramos.forEach((ramo) => {
        const div = crearRamo(ramo);
        cont.appendChild(div);
      });

      divSem.appendChild(cont);
      divAño.appendChild(divSem);
    });

    mallaDiv.appendChild(divAño);
  });
}

function actualizarUI() {
  malla.forEach((año) => {
    año.semestres.forEach((semestre) => {
      semestre.ramos.forEach((r) => {
        const d
