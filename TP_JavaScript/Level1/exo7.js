let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Demande un nombre
inputQuestion.question('Ton nombre : ', (nombre) => {
    let nombreCalc = parseFloat(nombre);

    if (isNaN(nombreCalc)) {
        console.log('Nombre invalide.');
    } else {

        //S'il est plus grand que 0 alors positif sinon négatif ou nul
        if (nombreCalc > 0) {
            console.log(`${nombreCalc} = Nombre positif.`);
        } else if (nombreCalc < 0) {
            console.log(`${nombreCalc} = Nombre négatif.`);
        } else {
            console.log(`${nombreCalc} est nul.`);
        }
    }

    inputQuestion.close();
});