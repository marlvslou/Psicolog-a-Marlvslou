const ramos = [
  // 1er Año
  // I semestre
  { id: "historia", nombre: "Historia de la psicología", semestre: "1-1", requisitos: [] },
  { id: "filosofia", nombre: "Fundamentos filosóficos de la psicología", semestre: "1-1", requisitos: [] },
  { id: "procesos", nombre: "Procesos psicológicos", semestre: "1-1", requisitos: [] },
  { id: "psicobiologia", nombre: "Psicobiología", semestre: "1-1", requisitos: [] },
  { id: "taller_bases", nombre: "Taller de Bases del desarrollo profesional", semestre: "1-1", requisitos: [] },
  { id: "electivo_eje1", nombre: "Electivo eje 1", semestre: "1-1", requisitos: [] },

  // II semestre
  { id: "sociologia", nombre: "Sociología", semestre: "1-2", requisitos: [] },
  { id: "psicologia_social_1", nombre: "Psicología social I", semestre: "1-2", requisitos: ["procesos"] },
  { id: "ciclo_vital_1", nombre: "Ciclo vital I", semestre: "1-2", requisitos: ["procesos"] },
  { id: "neurociencias", nombre: "Neurociencias", semestre: "1-2", requisitos: [] },
  { id: "taller_razonamiento", nombre: "Taller de Razonamiento y argumentación", semestre: "1-2", requisitos: [] },
  { id: "electivo_eje2", nombre: "Electivo eje 2", semestre: "1-2", requisitos: [] },

  // 2do Año
  // I semestre
  { id: "psicologia_social_2", nombre: "Psicología social II", semestre: "2-1", requisitos: ["psicologia_social_1"] },
  { id: "ciclo_vital_2", nombre: "Ciclo vital II", semestre: "2-1", requisitos: ["psicologia_social_1", "ciclo_vital_1"] },
  { id: "paradigmas_metodos", nombre: "Paradigmas y métodos de investigación en psicología", semestre: "2-1", requisitos: [] },
  { id: "taller_relaciones_1", nombre: "Taller de relaciones humanas I", semestre: "2-1", requisitos: [] },
  { id: "electivo_eje3", nombre: "Electivo eje 3", semestre: "2-1", requisitos: [] },
  { id: "electivo_linea_1", nombre: "Electivo línea 1", semestre: "2-1", requisitos: [] },

  // II semestre
  { id: "psicologia_personalidad", nombre: "Psicología de la personalidad", semestre: "2-2", requisitos: [] },
  { id: "metodologias_cuantitativas", nombre: "Metodologías cuantitativas para investigación", semestre: "2-2", requisitos: ["paradigmas_metodos"] },
  { id: "taller_relaciones_2", nombre: "Taller de relaciones humanas II", semestre: "2-2", requisitos: ["taller_relaciones_1"] },
  { id: "practica_temprana", nombre: "Práctica Temprana", semestre: "2-2", requisitos: ["ciclo_vital_2"] },
  { id: "electivo_linea_2", nombre: "Electivo línea 2", semestre: "2-2", requisitos: [] },

  // 3er Año
  // I semestre
  { id: "psicologia_educacional", nombre: "Psicología educacional", semestre: "3-1", requisitos: [] },
  { id: "psicopatologia", nombre: "Psicopatología", semestre: "3-1", requisitos: ["metodologias_cuantitativas", "practica_temprana"] },
  { id: "psicologia_cognitiva", nombre: "Psicología cognitiva", semestre: "3-1", requisitos: [] },
  { id: "psicologia_psicoanalitica", nombre: "Psicología psicoanalítica", semestre: "3-1", requisitos: [] },
  { id: "metodologias_cualitativas", nombre: "Metodologías cualitativas para la investigación en psicología", semestre: "3-1", requisitos: ["metodologias_cuantitativas", "practica_temprana"] },
  { id: "taller_psicodiagnostico_cognitivo", nombre: "Taller de psicodiagnóstico y técnicas de evaluación cognitiva", semestre: "3-1", requisitos: [] },

  // II semestre
  { id: "psicologia_trabajo", nombre: "Psicología del trabajo", semestre: "3-2", requisitos: [] },
  { id: "psiquiatria", nombre: "Psiquiatría", semestre: "3-2", requisitos: ["psicopatologia", "metodologias_cualitativas"] },
  { id: "psicologia_sistemica", nombre: "Psicología sistémica", semestre: "3-2", requisitos: [] },
  { id: "psicologia_humanista", nombre: "Psicología humanista existencial", semestre: "3-2", requisitos: [] },
  { id: "taller_psicodiagnostico_personalidad", nombre: "Taller de psicodiagnóstico y técnicas de evaluación de la personalidad", semestre: "3-2", requisitos: [] },
  { id: "taller_evaluacion_infantil", nombre: "Taller técnicas de evaluación infantil", semestre: "3-2", requisitos: [] },

  // 4to Año
  // I semestre
  { id: "introduccion_psicoterapia", nombre: "Introducción a la psicoterapia", semestre: "4-1", requisitos: [] },
  { id: "intervenciones_organizacionales", nombre: "Intervenciones organizacionales", semestre: "4-1", requisitos: [] },
  { id: "estrategia_analisis_datos", nombre: "Estrategia de análisis de datos", semestre: "4-1", requisitos: [] },
  { id: "optativo_4_1", nombre: "Optativo", semestre: "4-1", requisitos: [] },
  { id: "taller_investigacion", nombre: "Taller de investigación", semestre: "4-1", requisitos: [] },

  // II semestre
  { id: "optativo_4_2_1", nombre: "Optativo", semestre: "4-2", requisitos: [] },
  { id: "optativo_4_2_2", nombre: "Optativo", semestre: "4-2", requisitos: [] },
  { id: "optativo_4_2_3", nombre: "Optativo", semestre: "4-2", requisitos: [] },
  { id: "seminario_grado", nombre: "Seminario de grado", semestre: "4-2", requisitos: ["taller_investigacion"] },
  { id: "electivo_linea_3", nombre: "Electivo línea 3", semestre: "4-2", requisitos: [] },

  // 5to Año
  // I semestre
  { id: "desarrollo_competencias", nombre: "Desarrollo de competencias para la práctica de inserción laboral", semestre: "5-1", requisitos: [] },
  { id: "taller_autocuidado", nombre: "Taller de autocuidado y cuidado de equipos", semestre: "5-1", requisitos: [] },
  { id: "evaluacion_proyectos", nombre: "Evaluación de proyectos e intervenciones", semestre: "5-1", requisitos: ["seminario_grado"] },
  { id: "taller_habilidades_entrevista", nombre: "Taller de habilidades de entrevista", semestre: "5-1", requisitos: [] },
  { id: "intervencion_psicosocial", nombre: "Intervención psicosocial para la innovación", semestre: "5-1", requisitos: [] },
  { id: "optativo_5_1", nombre: "Optativo", semestre: "5-1", requisitos: [] },

  // II semestre
  { id: "taller_etica", nombre: "Taller de ética profesional", semestre: "5-2", requisitos: [] },
  { id: "practica_profesional", nombre: "Práctica profesional", semestre: "5-2", requisitos: ["evaluacion_proyectos"] }
];

// Estado guardado en localStorage
const estado = JSON.parse(localStorage.getItem("estadoRamos")) || {};

function guardarEstado() {
  localStorage.setItem("estadoRamos", JSON.stringify(estado));
}

function sePuedeActivar(ramo) {
  // Se puede activar si todos sus requisitos están aprobados
  return ramo.requisitos.every(id => estado[id]);
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  // Agrupar por año para mostrar agrupado y semestres dentro
  const porAño = {};

  ramos.forEach(ramo => {
    const [año, semestre] = ramo.semestre.split("-");
    if (!porAño[año]) porAño[año] = {};
    if (!porAño[año][semestre]) porAño[año][semestre] = [];
    porAño[año][semestre].push(ramo);
  });

  Object.keys(porAño).sort((a,b) => a - b).forEach(año => {
    const añoDiv = document.createElement("div");
    añoDiv.className = "año";
    añoDiv.innerHTML = `<h2>${año}° Año</h2>`;

    const semestres = porAño[año];

    Object.keys(semestres).sort().forEach(semestre => {
      const semestreDiv = document.createElement("div");
      semestreDiv.className = "semestre";
      semestreDiv.innerHTML = `<h3>${semestre == "1" ? "I" : "II"} Semestre</h3>`;

      semestres[semestre].forEach(ramo => {
        const div = document.createElement("div");
        div.className = "ramo";

        const aprobado = estado[ramo.id];
        const activable = sePuedeActivar(ramo);

        if (aprobado) {
          div.classList.add("aprobado");
        } else if (activable) {
          div.classList.add("activo");
        }

        div.innerHTML = `
          <span>${ramo.nombre}</span>
          <button ${(!activable || aprobado) ? "disabled" : ""}>Se aprueba</button>
        `;

        const btn = div.querySelector("button");
        btn.addEventListener("click", () => {
          estado[ramo.id] = true;
          guardarEstado();
          renderMalla();
        });

        semestreDiv.appendChild(div);
      });

      añoDiv.appendChild(semestreDiv);
    });

    contenedor.appendChild(añoDiv);
  });
}

renderMalla();
