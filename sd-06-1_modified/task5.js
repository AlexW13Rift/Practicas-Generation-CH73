const args = process.argv.slice(2);

function FriendsList(number, names) 
{
    this.names = [];

    for (let i = 0; i < number; i++) {
        this.names.push(names[i]);
    }
}

const number = Number(args[1]);
const names = args.slice(2);

const friends = new FriendsList(number, names);

console.log(friends.names);

