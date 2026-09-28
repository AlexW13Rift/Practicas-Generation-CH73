const prompt = require("prompt-sync")();//para usar prompt en la terminal

function ShoppingList(number) 
{
    this.items = [];

    for (let i = 0; i < number; i++) {
        const producto = prompt("¿Qué producto quieres agregar? ");
        const cantidad = prompt("¿Cuántos quieres? ");

        this.items.push(
        {
            producto: producto,
            cantidad: cantidad
        });
    }
}

const number = prompt("¿Cuántos productos quieres agregar? ");

const shoppingList = new ShoppingList(number);

console.log(shoppingList.items);



