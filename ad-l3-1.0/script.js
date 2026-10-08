function colorAleatorio() {
    const colores = ["green", "blue", "red"];

    const numero = Math.floor(Math.random() * 3);

    return colores[numero];
}

const titulos = document.querySelectorAll("h5");

titulos.forEach(function (titulo) {
    titulo.addEventListener("click", function () {
        titulo.style.color = colorAleatorio();
    });
});