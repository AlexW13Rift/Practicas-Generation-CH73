const prompt = require("prompt-sync")();//para usar prompt en la terminal

function Car(brand, model, year, color, doors, mileage) 
{
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.doors = doors;
    this.mileage = mileage;

}

const brand = prompt("¿Cuál es la marca del coche? ");
const model = prompt("¿Cuál es el modelo? ");
const year = prompt("¿Cuál es el año? ");
const color = prompt("¿Cuál es el color? ");
const doors = prompt("¿Cuántas puertas tiene? ");
const mileage = prompt("¿Cuál es el kilometraje? ");


const car = new Car(
    brand,
    model,
    year,
    color,
    doors,
    mileage,
   
);

console.log(car);


