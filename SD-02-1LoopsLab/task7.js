// Refer to Task 7 in your Instructions to complete this task
let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang",
    "Opps",
    "Crash",
    "Cortex",
    "Sonic"
];

function esPrimo(numero) {

    if (numero < 2) {
        return false;
    }

    for (let i = 2; i < numero; i++) {

    if (numero % i === 0) {
        return false;
      }
    }

    return true;
}

function esPrimoImpar(numero) {
    return esPrimo(numero) && numero % 2 !== 0;
}

let indice = 3;

for (let i = 1; i <= 35; i++) {

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

    if (resultado === "" && esPrimoImpar(i)) {
        resultado = buzzWords[indice];
        indice++;
    }

    if (resultado === "") {
        console.log(i);
    } else {
        console.log(resultado);
    }
}