let readline = require('readline');

let affUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

affUser.question('Veuillez saisir un nombre : ', (nombreInput) => {
    let nombreInt = parseInt(nombreInput);

    if (isNaN(nombreInt)) {
        console.log('Nombre invalide.');
    } else {
        if (nombreInt % 2 === 0) {
            console.log(`${nombreInt} = Nombre pair.`);
        } else {
            console.log(`${nombreInt} = Nombre impair.`);
        }
    }

    affUser.close();
});