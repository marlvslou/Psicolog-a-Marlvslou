const ramos = [
  // Primer Año - I Semestre
  { id: "historia", nombre: "Historia de la psicología" },
  { id: "fund_filos", nombre: "Fundamentos filosóficos de la psicología" },
  { id: "procesos", nombre: "Procesos psicológicos", abre: ["social1", "ciclo1"] },
  { id: "psicobio", nombre: "Psicobiología" },
  { id: "taller_desarrollo", nombre: "Taller de Bases del desarrollo profesional" },
  { id: "electivo1", nombre: "Electivo eje 1" },

  // Primer Año - II Semestre
  { id: "sociologia", nombre: "Sociología" },
  { id: "social1", nombre: "Psicología social I", req: ["procesos"], abre: ["ciclo2"] },
  { id: "ciclo1", nombre: "Ciclo vital I", req: ["procesos"], abre: ["ciclo2"] },
  { id: "neuro", nombre: "Neurociencias" },
  { id: "taller_arg", nombre: "Taller de Razonamiento y argumentación" },
  { id: "electivo2", nombre: "Electivo eje 2" },

  // Segundo Año - I Semestre
  { id: "social2", nombre: "Psicología social II" },
  { id: "ciclo2", nombre: "Ciclo vital II", req: ["ciclo1", "social1"], abre: ["practica_temp"] },
  { id: "metodos", nombre: "Paradigmas y métodos de investigación" },
  { id: "taller_rh1", nombre: "Taller de relaciones humanas I" },
  { id: "electivo3", nombre: "Electivo eje 3" },
  { id: "linea1", nombre: "Electivo línea 1" },

  // Segundo Año - II Semestre
  { id: "personalidad", nombre: "Psicología de la personalidad" },
  { id: "cuanti", nombre: "Metodologías cuantitativas", abre: ["psicopato", "cuali"] },
  { id: "taller_rh2", nombre: "Taller de relaciones humanas II" },
  { id: "practica_temp", nombre: "Práctica temprana", req: ["ciclo2"], abre: ["psicopato", "cuanti"] },
  { id: "linea2", nombre: "Electivo línea 2" },

  // Tercer Año - I Semestre
  { id: "educacional", nombre: "Psicología educacional" },
  { id: "psicopato", nombre: "Psicopatología", req: ["cuanti", "practica_temp"], abre: ["psiquiatria"] },
  { id: "cognitiva", nombre: "Psicología cognitiva" },
  { id: "psicoanalitica", nombre: "Psicología psicoanalítica" },
  { id: "cuali", nombre: "Metodologías cualitativas", req: ["cuanti", "practica_temp"], abre: ["psiquiatria"] },
  { id: "taller_cog", nombre: "Taller evaluación cognitiva" },

  // Tercer Año - II Semestre
  { id: "trabajo", nombre: "Psicología del trabajo" },
  { id: "psiquiatria", nombre: "Psiquiatría", req: ["psicopato", "cuali"], abre: ["investigacion"] },
  { id: "sistemica", nombre: "Psicología sistémica" },
  { id: "humanista", nombre: "Psicología humanista existencial" },
  { id: "taller_pers", nombre: "Taller evaluación personalidad" },
  { id: "taller_inf", nombre: "Taller evaluación infantil" },

  // Cuarto Año
  { id: "psicoterapia", nombre: "Introducción a la psicoterapia" },
  { id: "org", nombre: "Intervenciones organizacionales" },
  { id: "estrategias", nombre: "Estrategias de análisis de datos" },
  { id: "opt1", nombre: "Optativo 1" },
  { id: "investigacion", nombre: "Taller de investigación", req: ["psiquiatria"], abre: ["seminario"] },
  { id: "opt2", nombre: "Optativo 2" },
  { id: "opt3", nombre: "Optativo 3" },
  { id: "seminario", nombre: "Seminario de grado", req: ["investigacion"], abre: ["eval_proy"] },
  { id: "linea3", nombre: "Electivo línea 3" },

  // Quinto Año
  { id: "laboral", nombre: "Competencias laborales" },
  { id: "autocuidado", nombre: "Autocuidado y cuidado de equipos" },
  { id: "eval_proy", nombre: "Evaluación de proyectos", req: ["seminario"], abre: ["practica_final"] },
  { id: "entrevista", nombre: "Taller habilidades entrevista" },
  { id: "innovacion", nombre: "Intervención psicosocial innovadora" },
  { id: "opt4", nombre: "Optativo 4" },
  { id: "etica", nombre: "Taller de ética profesional" },
  { id: "practica_final", nombre: "Práctica profesional", req: ["eval_proy"] },
];

const mallaDiv = document.getElementById("malla");

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.className = "ramo";
  div.id = ramo.id;

  const titulo = document.createElement("h3");
  titulo.textContent = ramo.nombre;
  div.appendChild(titulo);

  const btn = document.createElement("button");
  btn.textContent = "Aprobar";
  btn.disabled = !!ramo.req;
  btn.onclick = () => aprobarRamo(ramo.id);
  div.appendChild(btn);

  mallaDiv.appendChild(div);
}

function aprobarRamo(id) {
  const div = document.getElementById(id);
  div.classList.add("activo");
  div.querySelector("button").disabled = true;

  ramos.forEach(r => {
    if (r.req && r.req.includes(id)) {
      const cumple = r.req.every(rid => document.getElementById(rid).classList.contains("activo"));
      if (cumple) {
        const target = document.getElementById(r.id);
        if (target) {
          target.classList.add("activo");
          target.querySelector("button").disabled = false;
        }
      }
    }
  });

  const abre = ramos.find(r => r.id === id)?.abre || [];
  abre.forEach(dest => {
    const desbloquear = ramos.find(r => r.id === dest);
    if (desbloquear && (!desbloquear.req || desbloquear.req.every(req => document.getElementById(req).classList.contains("activo")))) {
      const bloque = document.getElementById(dest);
      if (bloque) {
        bloque.classList.add("activo");
        bloque.querySelector("button").disabled = false;
      }
    }
  });
}

function init() {
  ramos.forEach(ramo => {
    crearRamo(ramo);
  });
}

init();

