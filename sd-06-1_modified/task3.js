const args = process.argv.slice(2);

function Mail(subj, msg) 
{
    this.subject = subj;
    this.message = msg;

    this.printMail = function() {
        console.log(this.subject + ": " + this.message);
    };
}

const newMail = new Mail(args[1], args[2]);

newMail.printMail();
  