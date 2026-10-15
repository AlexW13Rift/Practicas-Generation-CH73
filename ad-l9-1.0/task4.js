const contenedor = document.getElementById("container");

const segundos = document.querySelectorAll(".second");

const tercero = document.querySelector("ol .third");

const saludo = document.createElement("p");
saludo.textContent = "¡Hola!";
contenedor.prepend(saludo);

const footer = document.querySelector(".footer");
footer.classList.add("main");

footer.classList.remove("main");

const nuevoLi = document.createElement("li");

nuevoLi.textContent = "four";
const lista = document.querySelector("ul");
lista.appendChild(nuevoLi);