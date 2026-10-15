function contarEnlaces() {
    const enlaces = document.querySelectorAll("a");

    const cantidad = enlaces.length;
    const primerEnlace = enlaces[0].href;
    const ultimoEnlace = enlaces[cantidad - 1].href;

    alert(
        "Número de enlaces: " + cantidad +
        "\nPrimer enlace: " + primerEnlace +
        "\nÚltimo enlace: " + ultimoEnlace
    );
}