let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Demande le premier nombre
inputQuestion.question('Premier nombre : ', (nombre1) => {

    //Demande le deuxième nombre
    inputQuestion.question('Deuxième nombre : ', (nombre2) => {

        //Demande le troisième nombre
        inputQuestion.question('Troisième nombre : ', (nombre3) => {
            let num1 = parseFloat(nombre1);
            let num2 = parseFloat(nombre2);
            let num3 = parseFloat(nombre3);

            if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
                console.log('Nombres invalides.');
            } else {
                
                //Regarde le plus grand parmis les nombres 3
                let plusGrand = Math.max(num1, num2, num3);
                console.log(`[ ${num1}, ${num2}, ${num3} ] --> ${plusGrand}`);
            }

            inputQuestion.close();
        });
    });
});