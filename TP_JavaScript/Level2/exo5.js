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

        //Utilisation du .repeat(i) pour rajouter n '*' par rapport au nombre choisi par l'utilisateur
        for (let i = 1; i <= nombre; i++) {
            console.log('*'.repeat(i));
        }

        //idem
        for (let i = nombre - 1; i >= 1; i--) {
            console.log('*'.repeat(i));
        }
    }

    inputQuestion.close();
});