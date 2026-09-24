// Refer to Task 5 in your Instructions to complete this task

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuántas líneas quieres generar? ", function(numero) {

    for (let i = 1; i <= numero; i++) {

        let resultado = "";

        if (i % 3 === 0) {
            resultado += "Fizz";
        }

        if (i % 5 === 0) {
            resultado += "Buzz";
        }

        if (i % 7 === 0) {
            resultado += "Woof";
        }

        if (resultado === "") {
            console.log(i);
        } else {
            console.log(resultado);
        }
    }

    rl.close();
});