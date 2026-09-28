const args = process.argv.slice(2);

function Mail(subj, msg) 
{
    this.subject = subj;
    this.message = msg;
}

const newMail = new Mail(args[1], args[2]);

console.log(newMail.subject + ": " + newMail.message);

  