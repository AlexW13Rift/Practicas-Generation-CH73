export class Player 
{ 
    constructor(name, level) 
    { 
        this.name = name;
        this.level = level;
        this.experience = 0;
        this.inventory = {};
    }

    info() 
    {
        return `${this.name} has reached Level ${this.level}!`;
    }

    levelUp() 
    {
        this.level++;
    }

    gainExperience(points) 
    {
        this.experience += points;

        while (this.experience >= 100) 
        {
            this.levelUp();
            this.experience -= 100;
        }
    }

  addItem(item) 
  {
        if (this.inventory[item]) {
            this.inventory[item]++;
        } else {
            this.inventory[item] = 1;
        }
  }

  removeItem(item) 
  {
        if (this.inventory[item]) {
            this.inventory[item]--;

        if (this.inventory[item] === 0) {
            delete this.inventory[item];
      }
    }
  }

}

export class Party
{
  constructor()
  {
    this.members =[];
  }

  addPlayer(player)
  {
    this.members.push(player);
  }

  removePlayer(player)
  {
    this.members = this.members.filter(member => member !== player);
  }
}

// Prueba de task 7 incluyendo todo

const grog = new Player("Grog", 4);
const alex = new Player("Alex", 5);
const rift = new Player("Rift", 6);

// Grog
grog.addItem("Botiquin");
grog.addItem("Botiquin");
grog.addItem("Blindaje");

// Alex
alex.addItem("Blindaje");
alex.addItem("Botiquin");
alex.addItem("Botiquin");

// Rift
rift.addItem("Arma");
rift.addItem("Munición");
rift.addItem("Munición");
rift.addItem("Munición");

// Mostrar inventarios
console.log("Inventario de Grog:");
console.log(grog.inventory);

console.log("Inventario de Alex:");
console.log(alex.inventory);

console.log("Inventario de Rift:");
console.log(rift.inventory);

// Quitar objetos
grog.removeItem("Botiquin");
alex.removeItem("Botiquin");
rift.removeItem("Munición");

// Mostrar inventarios después de quitar objetos
console.log("Después de eliminar objetos:");

console.log("Grog:");
console.log(grog.inventory);

console.log("Alex:");
console.log(alex.inventory);

console.log("Rift:");
console.log(rift.inventory);