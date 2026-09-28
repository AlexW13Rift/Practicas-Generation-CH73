const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!

 // 1. Agregar un solo número a una fila existente
arr[1].push(30);

// 2. Agregar una fila completamente nueva de números
arr.push([31,32,33,34,35,36,37,38,39,40]);

// 3. Eliminar un solo número de una sola fila
arr[1].splice(2, 1);

// 4. Invertir una de las filas sin afectar a las demás
arr[0].reverse();

console.log(arr);