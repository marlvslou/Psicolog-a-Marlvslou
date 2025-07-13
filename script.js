// Datos de la malla con relaciones de prerequisitos
// id único por ramo, para facilitar control
const ramos = [
    // Primer año
    {id: "historia_psicologia", nombre: "Historia de la psicología", año: 1, semestre: 1, prerequisitos: []},
    {id: "fundamentos_filosoficos", nombre: "Fundamentos filosóficos de la psicología", año: 1, semestre: 1, prerequisitos: []},
    {id: "procesos_psicologicos", nombre: "Procesos psicológicos", año: 1, semestre: 1, prerequisitos: []},
    {id: "psicobiologia", nombre: "Psicobiología", año: 1, semestre: 1, prerequisitos: []},
    {id: "taller_bases_desarrollo", nombre: "Taller de Bases del desarrollo profesional", año: 1, semestre: 1, prerequisitos: []},
    {id: "electivo_eje_1", nombre: "Electivo eje 1", año: 1, semestre: 1, prerequisitos: []},

    {id: "sociologia", nombre: "Sociología", año: 1, semestre: 2, prerequisitos: []},
    {id: "psicologia_social_I", nombre: "Psicología social I", año: 1, semestre: 2, prerequisitos: ["procesos_psicologicos"]},
    {id: "ciclo_vital_I", nombre: "Ciclo vital I", año: 1, semestre: 2, prerequisitos: ["procesos_psicologicos"]},
    {id: "neurociencias", nombre: "Neurociencias", año: 1, semestre: 2, prerequisitos: []},
    {id: "taller_razonamiento", nombre: "Taller de Razonamiento y argumentacion", año: 1, semestre: 2, prerequisitos: []},
    {id: "electivo_eje_2", nombre: "Electivo eje 2", año: 1, semestre: 2, prerequisitos: []},

    // Segundo año
    {id: "psicologia_social_II", nombre: "Psicología social II", año: 2, semestre: 1, prerequisitos: ["psicologia_social_I"]},
    {id: "ciclo_vital_II", nombre: "Ciclo vital II", año: 2, semestre: 1, prerequisitos: ["psicologia_social_I", "ciclo_vital_I"]},
    {id: "paradigmas_metodos", nombre: "Paradigmas y metodos de investigación en psicología", año: 2, semestre: 1, prerequisitos: []},
    {id: "taller_rel_humanas_I", nombre: "Taller de relaciones humanas I", año: 2, semestre: 1, prerequisitos: []},
    {id: "electivo_eje_3", nombre: "Electivo eje 3", año: 2, semestre: 1, prerequisitos: []},
    {id: "electivo_linea_1", nombre: "Electivo línea 1", año: 2, semestre: 1, prerequisitos: []},

    {id: "psicologia_personalidad", nombre: "Psicologia de la personalidad", año: 2, semestre: 2, prerequisitos: []},
    {id: "metodologias_cuantitativas", nombre: "Metodologias cuantitativas para investigación en psicología", año: 2, semestre: 2, prerequisitos: []},
    {id: "taller_rel_humanas_II", nombre: "Taller de relaciones humanas II", año: 2, semestre: 2, prerequisitos: []},
    {id: "practica_temprana", nombre: "Práctica Temprana", año: 2, semestre: 2, prerequisitos: ["ciclo_vital_II"]},
    {id: "metodologias_cualitativas", nombre: "Metodologías cualitativas para la investigación en psicología", año: 2, semestre: 2, prerequisitos: ["metodologias_cuantitativas"]},
    {id: "electivo_linea_2", nombre: "Electivo línea 2", año: 2, semestre: 2, prerequisitos: []},

    // Tercer año
    {id: "psicologia_educacional", nombre: "Psicología educacional", año: 3, semestre: 1, prerequisitos: []},
    {id: "psicopatologia", nombre: "Psicopatología", año: 3, semestre: 1, prerequisitos: ["metodologias_cualitativas"]},
    {id: "psicologia_cognitiva", nombre: "Psicología cognitiva", año: 3, semestre: 1, prerequisitos: []},
    {id: "psicologia_psicoanalitica", nombre: "Psicología psicoanalítica", año: 3, semestre: 1, prerequisitos: []},
    {id: "taller_psicodiagnostico_eval_cognitiva", nombre: "Taller de psicodiagnóstico y técnicas de evaluación cognitiva", año: 3, semestre: 1, prerequisitos: []},

    {id: "psicologia_trabajo", nombre: "Psicología del trabajo", año: 3, semestre: 2, prerequisitos: []},
    {id: "psiquiatria", nombre: "Psiquiatría", año: 3, semestre: 2, prerequisitos: ["psicopatologia", "metodologias_cualitativas"]},
    {id: "psicologia_sistemica", nombre: "Psicología sistémica", año: 3, semestre: 2, prerequisitos: []},
    {id: "psicologia_humanista_existencial", nombre: "Psicología humanista existencial", año: 3, semestre: 2, prerequisitos: []},
    {id: "taller_psicodiagnostico_eval_personalidad", nombre: "Taller de psicodiagnóstico y técnicas de evaluación de la personalidad", año: 3, semestre: 2, prerequisitos: []},
    {id: "taller_tecnicas_eval_infantil", nombre: "Taller técnicas de evaluación infantil", año: 3, semestre: 2, prerequisitos: []},

    // Cuarto año
    {id: "introduccion_psicoterapia", nombre: "Introducción a la psicoterapia", año: 4, semestre: 1, prerequisitos: []},
    {id: "intervenciones_organizacionales", nombre: "Intervenciones organizacionales", año: 4, semestre: 1, prerequisitos: []},
    {id: "estrategia_analisis_datos", nombre: "Estrategia de análisis de datos", año: 4, semestre: 1, prerequisitos: []},
    {id: "optativo_4_1", nombre: "Optativo", año: 4, semestre: 1, prerequisitos: []},
    {id: "taller_investigacion", nombre: "Taller de investigación", año: 4, semestre: 1, prerequisitos: ["psiquiatria"]},

    {id: "optativo_4_2", nombre: "Optativo", año: 4, semestre: 2, prerequisitos: []},
    {id: "optativo_4_3", nombre: "Optativo", año: 4, semestre: 2, prerequisitos: []},
    {id: "optativo_4_4", nombre: "Optativo", año: 4, semestre: 2, prerequisitos: []},
    {id: "seminario_de_grado", nombre: "Seminario de grado", año: 4, semestre: 2, prerequisitos: ["taller_investigacion"]},
    {id: "electivo_linea_3", nombre: "Electivo línea 3", año: 4, semestre: 2, prerequisitos: []},

    // Quinto año
    {id: "desarrollo_competencias", nombre: "Desarrollo de competencias para la práctica de inserción laboral", año: 5, semestre: 1, prerequisitos: []},
    {id: "taller_autocuidado", nombre: "Taller de autocuidado y cuidado de equipos", año: 5, semestre: 1, prerequisitos: []},
    {id: "evaluacion_proyectos", nombre: "Evaluación de proyectos e intervenciones", año: 5, semestre: 1, prerequisitos: ["seminario_de_grado"]},
    {id: "taller_habilidades_entrevista", nombre: "Taller de habilidades de entrevista", año: 5, semestre: 1, prerequisitos: []},
    {id: "intervencion_psicosocial", nombre: "Intervención psicosocial para la innovación", año: 5, semestre: 1, prerequisitos: []},
    {id: "optativo_5_1", nombre: "Optativo", año: 5, semestre: 1, prerequisitos: []},

    {id: "taller_etica_profesional", nombre: "Taller de ética profesional", año: 5, semestre: 2, prerequisitos: []},
    {id: "practica_profesional", nombre: "Práctica profesional", año: 5, semestre: 2, prerequisitos: ["evaluacion_proyectos"]},
];

// Agrupamos por año y semestre para mostrar
function agruparPorAñoYSemestre(lista) {
    const agrupado = {};
    lista.forEach(ramo => {
        if (!agrupado[ramo.año]) agrupado[ramo.año] = {};
        if (!agrupado[ramo.año][ramo.semestre]) agrupado[ramo.año][ramo.semestre] = [];
        agrupado[ramo.año][ramo.semestre].push(ramo);
    });
    return agrupado;
}

// Estado guardado en localStorage (objeto id => true/false)
let estado = {};

// Guardar estado en localStorage
function guardarEstado() {
    localStorage.setItem('malla_estado', JSON.stringify(estado));
}

// Cargar estado desde localStorage
function cargarEstado() {
    const data = localStorage.getItem('malla_estado');
    if (data) {
        estado = JSON.parse(data);
    }
}

// Comprueba si los prerequisitos de un ramo están aprobados
function prerequisitosAprobados(ramo) {
    if (!ramo.prerequisitos.length) return true; // sin prerequisitos, desbloqueado
    return ramo.prerequisitos.every(prereqId => estado[prereqId] === true);
}

// Actualiza visual y botones según estado y prerequisitos
function actualizarVisual() {
    ramos.forEach(ramo => {
        const div = document.getElementById(ramo.id);
        if (!div) return;
        const boton = div.querySelector("button");
        const estadoAprobado = estado[ramo.id] === true;
        const desbloqueado = prerequisitosAprobados(ramo);

        if (estadoAprobado) {
            div.classList.add("desbloqueado");
            boton.disabled = true;
            boton.textContent = "Aprobado ✓";
            if (!div.querySelector(".estado-aprobado")) {
                const etiqueta = document.createElement("div");
                etiqueta.className = "estado-aprobado";
                etiqueta.textContent = "Aprobado";
                div.appendChild(etiqueta);
            }
        } else if (desbloqueado) {
            div.classList.add("desbloqueado");
            boton.disabled = false;
            boton.textContent = "Aprobar ramo";
            const etiqueta = div.querySelector(".estado-aprobado");
            if (etiqueta) etiqueta.remove();
        } else {
            div.classList.remove("desbloqueado");
            boton.disabled = true;
            boton.textContent = "Bloqueado";
            const etiqueta = div.querySelector(".estado-aprobado");
            if (etiqueta) etiqueta.remove();
        }
    });
}

// Evento cuando aprueban un ramo
function aprobarRamo(id) {
    estado[id] = true;
    guardarEstado();
    actualizarVisual();
}

// Construye la malla en el DOM
function construirMalla() {
    const contenedor = document.getElementById("malla");
    const agrupado = agruparPorAñoYSemestre(ramos);

    for (const año of Object.keys(agrupado).sort((a,b)=>a-b)) {
        const divAño = document.createElement("div");
        divAño.id = "año-" + año;
        divAño.className = "año";

        const h2 = document.createElement("h2");
        h2.textContent = `Año ${año}`;
        divAño.appendChild(h2);

        const semestres = agrupado[año];
        for (const semestre of Object.keys(semestres).sort((a,b)=>a-b)) {
            const divSemestre = document.createElement("div");
            divSemestre.className = "semestre";

            const h3 = document.createElement("h3");
            h3.textContent = `Semestre ${semestre}`;
            divSemestre.appendChild(h3);

            const ramosCont = document.createElement("div");
            ramosCont.className = "ramos-container";

            semestres[semestre].forEach(ramo => {
                const divRamo = document.createElement("div");
                divRamo.className = "ramo";
                divRamo.id = ramo.id;

                const nombre = document.createElement("div");
                nombre.className = "nombre";
                nombre.textContent = ramo.nombre;
                divRamo.appendChild(nombre);

                if (ramo.prerequisitos.length) {
                    const info = document.createElement("div");
                    info.className = "info";
                    info.textContent = "Requiere: " + ramo.prerequisitos.map(id => {
                        const r = ramos.find(x => x.id === id);
                        return r ? r.nombre : id;
                    }).join(", ");
                    divRamo.appendChild(info);
                }

                const btn = document.createElement("button");
                btn.textContent = "Bloqueado";
                btn.disabled = true;
                btn.addEventListener("click", () => aprobarRamo(ramo.id));
                divRamo.appendChild(btn);

                ramosCont.appendChild(divRamo);
            });

            divSemestre.appendChild(ramosCont);
            divAño.appendChild(divSemestre);
        }

        contenedor.appendChild(divAño);
    }
}

function init() {
    cargarEstado();
    construirMalla();
    actualizarVisual();
}

window.addEventListener("DOMContentLoaded", init);
