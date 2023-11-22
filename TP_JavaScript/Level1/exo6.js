let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Demande un nombre au user
inputQuestion.question('Veuillez saisir un nombre : ', (nombreInput) => {
    let nombreInt = parseInt(nombreInput);

    if (isNaN(nombreInt)) {
        console.log('Nombre invalide.');

    //Si il est modulo 2 alors il est pair
    } else {
        if (nombreInt % 2 === 0) {
            console.log(`${nombreInt} = Nombre pair.`);
        } else {
            console.log(`${nombreInt} = Nombre impair.`);
        }
    }

    inputQuestion.close();
});