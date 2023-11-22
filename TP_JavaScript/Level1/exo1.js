let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Demande à l'utilisateur son prénom et l'affiche
inputQuestion.question('Saisie ton prénom : ', (resUser) => {
    console.log(`Bienvenue ${resUser} !`);
    inputQuestion.close();
});