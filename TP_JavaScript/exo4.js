let readline = require('readline');

let affUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

affUser.question('Age de l\'enfant : ', (resUser) => {
    
    if(resUser >= 12) {
        console.log('Enfant Cadet');

    } else if(resUser >= 10) {
        console.log('Enfant Minime');

    } else if(resUser >= 8) {
        console.log('Enfant Pupille');

    } else {
        console.log('Enfant Poussin');
    }

    affUser.close();
});