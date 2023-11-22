let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//Demande une table
inputQuestion.question('Table de : ', (nombreInput) => {
    let nombreInt = parseInt(nombreInput);

    if (isNaN(nombreInt)) {
        console.log('Table invalide.');
    } else {

        //Print la table choisi avec le format (1x2, 2x2, 3x2, ...)
        for (let i = 1; i <= 10; i++) {
            let resTable = nombreInt * i;
            console.log(`${nombreInt} x ${i} = ${resTable}`);
        }
    }

    inputQuestion.close();
});