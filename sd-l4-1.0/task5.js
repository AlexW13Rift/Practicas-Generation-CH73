export class Player 
{ 
    constructor(name, level) 
    { 
        this.name = name;
        this.level = level;
        this.experience = 0;
    }

    info() 
    {
        return `${this.name} has reached Level ${this.level}!`;
    }

    levelUp() 
    {
        this.level++;
    }

    gainExperience(points) {
        this.experience += points;

        while (this.experience >= 100) {
            this.levelUp();
            this.experience -= 100;
        }
    }
}

// Prueba de task 5

const player1 = new Player("Grog", 4);

console.log(player1);

player1.gainExperience(50);

console.log(player1);

player1.gainExperience(50);

console.log(player1);
console.log(player1.info());

// prueba para que no se borre la experiencia al subir de nivel

const player2 = new Player("Alex", 4);

player2.gainExperience(140);
console.log(player2);
console.log(player2.info());

// prueba para saber si sube 2 niveles al tener 200 de experiencia

const player3 = new Player("Rift", 4);

player3.gainExperience(260);
console.log(player3); 
console.log(player3.info());