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
            //Utilisation du .repeat(i) pour rajouter n '*' par rapport au nombre choisi par l'utilisateur
            console.log('*'.repeat(i));
        }
    }

    inputQuestion.close();
});