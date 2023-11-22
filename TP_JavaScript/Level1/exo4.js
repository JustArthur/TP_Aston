let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Demande l'âge
inputQuestion.question('Age de l\'enfant : ', (resUser) => {
    
    //Vérifie l'âge de l'enfant et print selon son âge
    if(resUser >= 12) {
        console.log('Enfant Cadet');

    } else if(resUser >= 10) {
        console.log('Enfant Minime');

    } else if(resUser >= 8) {
        console.log('Enfant Pupille');

    } else {
        console.log('Enfant Poussin');
    }

    inputQuestion.close();
});