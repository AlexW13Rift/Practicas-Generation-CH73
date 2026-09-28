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

//Prueba de task 6

const player1 = new Player("Grog", 1);
const player2 = new Player("Alex", 10);
const player3 = new Player("Rift", 14);

const party = new Party();

party.addPlayer(player1);
party.addPlayer(player2);
party.addPlayer(player3);

console.log("Miembros del grupo:");
console.log(party.members);

party.removePlayer(player1);

console.log("Después de eliminar a Grog:");

player1.gainExperience(50);
player2.gainExperience(560);
player3.gainExperience(1000);

console.log(party.members);

