let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Demande un nombre
inputQuestion.question('Saisir un nombre : ', (nombreN) => {
    let nombre = parseInt(nombreN);

    if (isNaN(nombre) || nombre < 0) {
        console.log('Nombre entier positif requis.');
    } else {
        for (let i = 0; i <= nombre; i++) {
            let resultat = '';

            //Si modulo 3 alors FIZZ
            if (i % 3 === 0) {
                resultat += 'FIZZ';
            }

            //Si modulo 5 alors BUZZ
            if (i % 5 === 0) {
                resultat += 'BUZZ';
            }

            if (resultat === '') {
                resultat = i;
            }

            console.log(resultat);
        }
    }

    inputQuestion.close();
});