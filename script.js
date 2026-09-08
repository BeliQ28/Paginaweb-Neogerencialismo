/* ================= NAVEGACIÓN ================= */

function mostrarSeccion(nombre) {

    const secciones = document.querySelectorAll(".seccion, .hero");

    // Ocultar todas las secciones
    secciones.forEach(seccion => {
        seccion.classList.remove("seccion-activa");
    });

    // Buscar la sección seleccionada
    const destino = document.getElementById(nombre);

    if (destino) {

        // Mostrar únicamente la sección elegida
        destino.classList.add("seccion-activa");

        // Volver al inicio de la pantalla
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }
}

/* ================= ENSAYOS ================= */

const ensayos = [

    {

        autor: "ENSAYO DE blablabla",

        titulo: "titulooo del ensayo",

        frase: "alguna frase citada o asi nomas",

        introduccion:
        "introducción del ensayo blababla",

        desarrollo:
        "desarrollo del ensayo blablabla",

        conclusion:
        "conclusio ensayo blabknks"

    },


    {

        autor: "ensayo maryyyy",

        titulo: "aeiou",

        frase: "aeiou",

        introduccion:
        "introducción mary.",

        desarrollo:
        "desarrollo mary.",

        conclusion:
        "conclusión mary."

    },


    {

        autor: "ENSAYO DEYSI",

        titulo: "lalalala",

        frase: "llalalal",

        introduccion:
        "lalalla",

        desarrollo:
        "lalal",

        conclusion:
        "lalala"

    },


    {

        autor: "ENSAYO BELIINDA",

        titulo: "oKSKSK",

        frase: "Modernizar el Estado implica transformar la manera en que se gestionan los recursos y servicios públicos.",

        introduccion:
        "   belimlslsl",

        desarrollo:
        "uuuu",

        conclusion:
        "sjskkaaa"

    }

];


function cambiarEnsayo(indice) {

    const ensayo = ensayos[indice];


    document.getElementById("autor").textContent =
        ensayo.autor;


    document.getElementById("tituloEnsayo").textContent =
        ensayo.titulo;


    document.getElementById("fraseEnsayo").textContent =
        `"${ensayo.frase}"`;


    document.getElementById("introduccion").textContent =
        ensayo.introduccion;


    document.getElementById("desarrollo").textContent =
        ensayo.desarrollo;


    document.getElementById("conclusion").textContent =
        ensayo.conclusion;


    const tabs = document.querySelectorAll(".tab");


    tabs.forEach(tab => {

        tab.classList.remove("activo");

    });


    tabs[indice].classList.add("activo");

}


/* ================= JUEGO ================= */

function mostrarResultado(boton) {

    const resultado =
        boton.getAttribute("data-result");


    const caja =
        document.getElementById("resultado-juego");


    caja.textContent = resultado;


    caja.style.opacity = "0";


    setTimeout(() => {

        caja.style.opacity = "1";

    }, 100);

}


/* =====================================================
   PERFILES DEL EQUIPO
===================================================== */

const integrantes = {

    matias: {
        nombre: "Tapia Matías",
        numero: "1",
        foto: "img/matias.jpg",
        carrera: "Estudiante Universitario de Administración Pública",
        formacion: "Completar información",
        institucion: "Colegio Central Técnico ",

        softSkills: [
            "Creatividad",
            "Trabajo en equipo",
            "Sentido del humor",
            "Capacidad para resolver problemas"
        ],

        hardSkills: [
            "Conocimientos y manejo de instalaciones eléctricas",
            "Atención al cliente",
            "Organización y administración de actividades"
        ],

        descripcion:
            "Una persona que no se queda quieta: pregunta, aprende, intenta y busca salir adelante. A veces puede ser impulsivo, pero siempre tiene la intención de mejorar y conseguir lo que se propone. Su curiosidad, perseverancia y sentido del humor son parte de lo que lo hace ser él mismo."
    },


    mary: {
        nombre: "Pinto Mary ",
        numero: "2",
        foto: "img/mary.jpg",
        carrera: "Estudiante Universitaria de Administración Pública",
        formacion: "Completar información",
        institucion: "Colegio Fiscal Quito ",

        softSkills: [
            "Responsabilidad",
            "Creatividad",
            "Resolución de problemas",
            "Trabajo en equipo"
        ],

        hardSkills: [
            "Certificado en lengua de seña",
            "Redes sociales",
            "Conocimientos adquiridos siendo educadora profe de inicial"
        ],

        descripcion:
            "Soy una persona luchadora, responsable y perseverante. Me caracteriza mi capacidad para seguir adelante a pesar de las dificultades y aprender de cada experiencia. Valoro mucho el respeto, la empatía y la honestidad. Me gusta ayudar a los demás y dar lo mejor de mí en cada cosa que hago. Sé que todavía tengo mucho por aprender, pero también tengo la determinación para alcanzar mis metas y construir poco a poco el futuro que quiero."
    },


    deysi: {
        nombre: "Nolasco Deysi",
        numero: "3",
        foto: "img/deysi.jpg",
        carrera: "Estudiante Universitaria de Administración Pública",
        formacion: "blala",
        institucion: "idkk",

        softSkills: [
            "Responsabilidad",
            "Empatía",
            "Organización",
            "Trabajo en equipo"
        ],

        hardSkills: [
            "llala",
            "lalala",
            "akajajaka"
        ],

        descripcion:
            "klalala"
    },


    belinda: {
        nombre: "Belinda",
        numero: "04",
        foto: "img/belinda.jpg",
        carrera: "Estudiante Universitaria de Administración Pública",
        formacion: "Bachiller",
        institucion: "UEF Fe y Alegria La Dolorosa",

        softSkills: [
            "Creatividad",
            "Responsabilidad",
            "Liderazgo",
            "Trabajo en equipo"
        ],

        hardSkills: [
            "Desarrollo Web",
            "Gestión de Bases de Datos",
            "Marketing Digital y Medios"
        ],

        descripcion:
            "Soy una persona creativa, responsable y perseverante, siempre dispuesta a aprender y dar lo mejor de mí. Me gusta trabajar en equipo, aportar ideas y buscar soluciones, pero sobre todo, no rendirme fácilmente cuando algo realmente me importa."
    }

};


function crearHabilidades(elemento, habilidades) {

    elemento.innerHTML = "";

    habilidades.forEach(habilidad => {

        const etiqueta = document.createElement("span");

        etiqueta.textContent = habilidad;

        elemento.appendChild(etiqueta);

    });

}


function abrirPerfil(persona) {

    const integrante = integrantes[persona];

    if (!integrante) return;


    document.getElementById("fotoPerfil").src =
        integrante.foto;

    document.getElementById("fotoPerfil").alt =
        "Foto de " + integrante.nombre;

    document.getElementById("numeroPerfil").textContent =
        integrante.numero;

    document.getElementById("nombrePerfil").textContent =
        integrante.nombre;

    document.getElementById("carreraPerfil").textContent =
        integrante.carrera;

    document.getElementById("formacionPerfil").textContent =
        integrante.formacion;

    document.getElementById("institucionPerfil").textContent =
        integrante.institucion;

    document.getElementById("descripcionPerfil").textContent =
        integrante.descripcion;


    crearHabilidades(
        document.getElementById("softSkills"),
        integrante.softSkills
    );


    crearHabilidades(
        document.getElementById("hardSkills"),
        integrante.hardSkills
    );


    const modal = document.getElementById("modalPerfil");

    modal.classList.add("modal-visible");

    document.body.style.overflow = "hidden";
}


function cerrarPerfil() {

    const modal = document.getElementById("modalPerfil");

    modal.classList.remove("modal-visible");

    document.body.style.overflow = "";
}


/* Cerrar haciendo clic fuera de la ventana */

document.getElementById("modalPerfil").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {
            cerrarPerfil();
        }

    }
);


/* Cerrar con la tecla ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        cerrarPerfil();
    }

});


document.addEventListener("DOMContentLoaded", () => {

    cambiarEnsayo(0);

})
