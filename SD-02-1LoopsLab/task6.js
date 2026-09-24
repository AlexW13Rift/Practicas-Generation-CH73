// Refer to Task 6 in your Instructions to complete this task

let resultados = [];

for (let i = 1; i <= 105; i++) {

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
        resultados.push(i);
    } else {
        resultados.push(resultado);
    }
}
console.log(resultados);