alert("¡Hola CH73!");

console.log("Esta es la consola");

const question = prompt("Quien eres?");
alert(`Bienvenid@ ${question}`);

const equipo = [
    {
        nombre: "Elizabeth",
        motivo: "Espero obtener las herramientas necesarias para la creación de un e - comerce y desarrollar mis habilidades blandas en conjunto con el equipo."
    },
    {
        nombre: "Emanuel",
        motivo: "Yo espero aprender mucho de este proyecto, aprender a trabajar en equipo, y desarrollar habilidades nuevas dentro del mundo de TI."
    },
    {
        nombre: "Victor",
        motivo: "Y al finalizar con el proyecto espero conocer cada una de las partes que lo conforman y de igual manera aprender y dominar cada una. y mejorar mis Soft skillis."
    },
    {
        nombre: "David",
        motivo: "Lo que espero de nuestro proyecto es que sea nuestra herramienta para poder entrar al mundo Ti."
    },
    {
        nombre: "André",
        motivo: "estoy aquí para poder conseguir mi primer empleo en el área TEC y con el proyecto espero poner en práctica las habilidades vistas en el bootcamp, así como agregar el proyecto a mi portafolio de prácticas de código."
    },
    {
        nombre: "Diego",
        motivo: "Espero aprender nuevas herramientas que me ayuden a seguir mejorando en programación, ganar más experiencia y también desarrollar mis habilidades para trabajar mejor con el equipo."
    },
    {
        nombre: "Isaac",
        motivo: "estoy aqui por que quiero pulir mis habilidades como desarrollador fullStack y espero obtener mas conocimiento y al mismo tiempo experiencia."
    },
    {
        nombre: "Eric",
        motivo: "Estoy aquí para aprender programación, desarrollar mis habilidades y adquirir nuevos conocimientos, espero que el proyecto me permita seguir aprendiendo, mejorar mis habilidades y superar cualquier problema que se presente"
    },
    {
        nombre: "Julio",
        motivo: "Estoy aquí para aprender nuevas herramientas, conocimientos y habilidades que me permitan crear proyectos interesantes de software para conseguir un mejor empleo, para aportar mis habilidades al equipo y crecer juntos."
    },
    {
        nombre: "Angélica",
        motivo: "estoy aqui para volver a enamorarme de mi carrera y retomar mis conocimientos y habilidades que me permitan crecer profesionalmente y aportar lo mejor de mi a mi equipo"
    }
];

const entrada = prompt("Escribe tu nombre:");

if (entrada === null) {
    alert("Búsqueda cancelada");
} else {
    const nombre = entrada.toLowerCase().trim();

    const encontrar = equipo.filter(persona =>
        persona.nombre.toLowerCase().includes(nombre)
    );

    if (nombre === "" || encontrar.length === 0) {
        alert("No se encontró ningún integrante con ese nombre");
    } else {
        const mensaje = encontrar
            .map(persona => `${persona.nombre}:\n${persona.motivo}`)
            .join("\n\n");

        alert(mensaje);
    }
}