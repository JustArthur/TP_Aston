let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Demande un nombre
inputQuestion.question('Saisir un nombre : ', (nombreUser) => {
    let nombre = parseInt(nombreUser);

    if (isNaN(nombre) || nombre < 1) {
        console.log('Nombre entier positif requis.');
    } else {
        for (let i = 1; i <= nombre; i++) {

            //Il met x-1 espace et met 2*x-1 étoile pour bien les centrer par rapport à la demande
            console.log(' '.repeat(nombre - i) + '*'.repeat(2 * i - 1));
        }
    }

    inputQuestion.close();
});