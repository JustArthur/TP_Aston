let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function convertirEnBase(nombreEnDecimal, base) {
    let chiffres = [];

    while (nombreEnDecimal > 0) {
        chiffres.push(nombreEnDecimal % base);
        nombreEnDecimal = Math.floor(nombreEnDecimal / base);
    }

    chiffres.reverse();
    return chiffres.join('');
}


inputQuestion.question('Nombre Decimal : ', (nombreEnDecimal) => {
    inputQuestion.question('Base binnaire choisi : ', (baseBinaire) => {
        let question1 = parseFloat(nombreEnDecimal);
        let question2 = parseFloat(baseBinaire);

        let resBinaire = convertirEnBase(nombreEnDecimal, baseBinaire);

        console.log(`Le nombre ${question1} en base ${question2} est : ${resBinaire}`);
        inputQuestion.close();
    });
});