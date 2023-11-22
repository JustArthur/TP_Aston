let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Demande un nombre
inputQuestion.question('Saisir un nombre : ', (nombreN) => {
    let N = parseInt(nombreN);

    if (isNaN(N) || N < 1) {
        console.log('Nombre entier positif requis.');

    } else {
        let sommeInt = 0;
        let sommeStringCalc = "";

        //Tant que mon i est inférieur ou égal à mon N il fait la somme
        for (let i = 1; i <= N; i++) {
            sommeInt += i;

            //Rajoute un + après le premier chiffre sauf le dernier
            sommeStringCalc += i;
            if (i < N) {
                sommeStringCalc += ' + ';
            }
        }

        console.log(`${sommeStringCalc} = ${sommeInt}`);
    }

    inputQuestion.close();
});