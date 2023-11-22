let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Demande le premier nombre
inputQuestion.question('Premier nombre : ', (nombre1) => {

    //Demande le deuxième nombre
    inputQuestion.question('Deuxième nombre : ', (nombre2) => {

        //Calcule en passant les saisies du user en float
        let res = parseFloat(nombre1) + parseFloat(nombre2);
        console.log(`${nombre1} + ${nombre2} = ${res}`);
        inputQuestion.close();
    });
});