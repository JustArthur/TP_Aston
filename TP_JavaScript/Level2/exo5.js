let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inputQuestion.question('Saisir un nombre : ', (nombreUser) => {
    let nombre = parseInt(nombreUser);

    if (isNaN(nombre) || nombre < 1) {
        console.log('Nombre entier positif requis.');
    } else {
        for (let i = 1; i <= nombre; i++) {
            console.log('*'.repeat(i));
        }

        for (let i = nombre - 1; i >= 1; i--) {
            console.log('*'.repeat(i));
        }
    }

    inputQuestion.close();
});