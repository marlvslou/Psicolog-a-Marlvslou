// Definimos los ramos con id, nombre, requisitos y cuáles desbloquean ("abre")
const malla = [
  // Primer año
  {
    año: 1,
    semestres: [
      {
        nombre: "I Semestre",
        ramos: [
          { id: "historia", nombre: "Historia de la psicología" },
          { id: "fund_filos", nombre: "Fundamentos filosóficos de la psicología" },
          { id: "procesos", nombre: "Procesos psicológicos", abre: ["social1", "ciclo1"] },
          { id: "psicobio", nombre: "Psicobiología" },
          { id: "taller_bases", nombre: "Taller de Bases del desarrollo profesional" },
          { id: "electivo1", nombre: "Electivo eje 1" },
        ],
      },
      {
        nombre: "II Semestre",
        ramos: [
          { id: "sociologia", nombre: "Sociología" },
          { id: "social1", nombre: "Psicología social I", req: ["procesos"], abre: ["ciclo2"] },
          { id: "ciclo1", nombre: "Ciclo vital I", req: ["procesos"], abre: ["ciclo2"] },
          { id: "neurociencias", nombre: "Neurociencias" },
          { id: "taller_razon", nombre: "Taller de Razonamiento y argumentacion" },
          { id: "electivo2", nombre: "Electivo eje 2" },
        ],
      },
    ],
  },

  // Segundo año
  {
    año: 2,
    semestres: [
      {
        nombre: "I Semestre",
        ramos: [
          { id: "social2", nombre: "Psicología social II" },
          { id: "ciclo2", nombre: "Ciclo vital II", req: ["social1", "ciclo1"], abre: ["practica_temp"] },
          { id: "paradigmas", nombre: "Paradigmas y metodos de investigación en psicología" },
          { id: "taller_rh1", nombre: "Taller de relaciones humanas I" },
          { id: "electivo3", nombre: "Electivo eje 3" },
          { id: "electivo_linea1", nombre: "Electivo línea 1" },
        ],
      },
      {
        nombre: "II Semestre",
        ramos: [
          { id: "personalidad", nombre: "Psicología de la personalidad" },
          { id: "cuantitativas", nombre: "Metodologías cuantitativas para investigación en psicología", abre: ["psicopato", "cualitativas"] },
          { id: "taller_rh2", nombre: "Taller de relaciones humanas II" },
          { id: "practica_temp", nombre: "Práctica Temprana", req: ["ciclo2"], abre: ["psicopato", "cuantitativas"] },
          { id: "electivo_linea2", nombre: "Electivo línea 2" },
        ],
      },
    ],
  },

  // Tercer año
  {
    año: 3,
    semestres: [
      {
        nombre: "I Semestre",
        ramos: [
          { id: "educacional", nombre: "Psicología educacional" },
          { id: "psicopato", nombre: "Psicopatología", req: ["practica_temp", "cuantitativas"], abre: ["psiquiatria"] },
          { id: "cognitiva", nombre: "Psicología cognitiva" },
          { id: "psicoanalitica", nombre: "Psicología psicoanalítica" },
          { id: "cualitativas", nombre: "Metodologías cualitativas", req: ["practica_temp", "cuantitativas"], abre: ["psiquiatria"] },
          { id: "taller_cognitivo", nombre: "Taller de psicodiagnóstico y técnicas de evaluación cognitiva" },
        ],
      },
      {
        nombre: "II Semestre",
        ramos: [
          { id: "trabajo", nombre: "Psicología del trabajo" },
          { id: "psiquiatria", nombre: "Psiquiatría", req: ["psicopato", "cualitativas"], abre: ["taller_investigacion"] },
          { id: "sistemica", nombre: "Psicología sistémica" },
          { id: "humanista", nombre: "Psicología humanista existencial" },
          { id: "taller_personalidad", nombre: "Taller de psicodiagnóstico y técnicas de evaluación de la personalidad" },
          { id: "taller_infantil", nombre: "Taller técnicas de evaluación infantil" },
        ],
      },
    ],
  },

  // Cuarto año
  {
    año: 4,
    semestres: [
      {
        nombre: "I Semestre",
        ramos: [
          { id: "psicoterapia", nombre: "Introducción a la psicoterapia" },
          { id: "interv_org", nombre: "Intervenciones organizacionales" },
          { id: "estrategia_datos", nombre: "Estrategia de análisis de datos" },
          { id: "optativo1", nombre: "Optativo" },
          { id: "taller_investigacion", nombre: "Taller de investigación", req: ["psiquiatria"], abre: ["seminario"] },
        ],
      },
      {
        nombre: "II Semestre",
        ramos: [
          { id: "optativo2", nombre: "Optativo" },
          { id: "optativo3", nombre: "Optativo" },
          { id: "optativo4", nombre: "Optativo" },
          { id: "seminario", nombre: "Seminario de grado", req: ["taller_investigacion"], abre: ["evaluacion_proyectos"] },
          { id: "electivo_linea3", nombre: "Electivo línea 3" },
        ],
      },
    ],
  },

  // Quinto año
  {
    año: 5,
    semestres: [
      {
        nombre: "I Semestre",
        ramos: [
          { id: "competencias_laborales", nombre: "Desarrollo de competencias para la práctica de inserción laboral" },
          { id: "autocuidado", nombre: "Taller de autocuidado y cuidado de equipos" },
          { id: "evaluacion_proyectos", nombre: "Evaluación de proyectos e intervenciones", req: ["seminario"], abre: ["practica_profesional"] },
          { id: "habilidades_entrevista", nombre: "Taller de habilidades de entrevista" },
          { id: "intervencion_innovacion", nombre: "Intervención psicosocial para la innovación" },
          { id: "optativo5", nombre: "Optativo" },
        ],
      },
      {
        nombre: "II Semestre",
        ramos: [
          { id: "etica_profesional", nombre: "Taller de ética profesional" },
          { id: "practica_profesional", nombre: "Práctica profesional", req: ["evaluacion_proyectos"] },
        ],
      },
    ],
  },
];

// Guardamos el estado de ramos aprobados (id)
const aprobados = new Set();

// Referencia al contenedor principal
const mallaDiv = document.getElementById("malla");

// Función para crear un ramo HTML
function crearRamo(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.id = ramo.id;

  if (!ramo.req) {
    div.classList.add("activo"); // Si no tiene prerequisitos, activo desde el inicio
  }

  const titulo = document.createElement("h4");
  titulo.textContent = ramo.nombre;
  div.appendChild(titulo);

  const btn = document.createElement("button");
  btn.textContent = "Aprobar";
  btn.disabled = ramo.req ? true : false; // Si tiene prerequisitos, boton deshabilitado inicialmente
  btn.onclick = () => aprobarRamo(ramo.id);
  div.appendChild(btn);

  return div;
}

// Función que aprueba un ramo y desbloquea los que dependen de él
function aprobarRamo(id) {
  aprobados.add(id);
  const div = document.getElementById(id);
  div.classList.add("activo");
  div.querySelector("button").disabled = true;

  // Revisa qué ramos tienen este como requisito
  malla.forEach((ano) => {
    ano.semestres.forEach((semestre) => {
      semestre.ramos.forEach((r) => {
        if (r.req && r.req.includes(id)) {
          // Verifica si todos los prerequisitos están aprobados
          const todosAprobados = r.req.every((reqId) => aprobados.has(reqId));
          if (todosAprobados) {
            const ramoDiv = document.getElementById(r.id);
            if (ramoDiv) {
              ramoDiv.classList.add("activo");
              ramoDiv.querySelector("button").disabled = false;
            }
          }
        }
      });
    });
  });

  // Además desbloquea los que "abre" el ramo (aunque no tengan prerequisitos)
  const ramoActual = encontrarRamo(id);
  if (ramoActual && ramoActual.abre) {
    ramoActual.abre.forEach((idAbre) => {
      const ramoAbre = encontrarRamo(idAbre);
      if (ramoAbre) {
        const divAbre = document.getElementById(idAbre);
        if (divAbre) {
          // Verifica prerequisitos para seguridad
          if (!ramoAbre.req || ramoAbre.req.every((reqId) => aprobados.has(reqId))) {
            divAbre.classList.add("activo");
            divAbre.querySelector("button").disabled = false;
          }
        }
      }
    });
  }
}

// Busca ramo en la malla por id
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
}

renderMalla();
