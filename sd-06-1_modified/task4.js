const args = process.argv.slice(2);

function Journey(from, to) 
{
    this.start = from;
    this.end = to;
}

const travel = new Journey(args[1], args[2]);

console.log(
    "Booking a taxi from " +
    travel.start +
    " to " +
    travel.end +
    "."
);