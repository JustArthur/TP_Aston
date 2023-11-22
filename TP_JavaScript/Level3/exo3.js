let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function convertirEnBase(nombreEnDecimal, base) {
    let chiffres = [];

    while (nombreEnDecimal > 0) {

        //Push dans le tableau le modulo base par mon nombre en decimal
        chiffres.push(nombreEnDecimal % base);

        //Converti le decimal par rapport à la base choisi
        nombreEnDecimal = Math.floor(nombreEnDecimal / base);
    }

    //Mon dernier élément devient le premier et le dernier le premier...
    chiffres.reverse();

    //Créer une nouvelle châine de caractère
    return chiffres.join('');
}

//Demande un decimal
inputQuestion.question('Nombre Decimal : ', (nombreEnDecimal) => {

    //Demande la base
    inputQuestion.question('Base binnaire choisi : ', (baseBinaire) => {
        let question1 = parseFloat(nombreEnDecimal);
        let question2 = parseFloat(baseBinaire);

        let resBinaire = convertirEnBase(nombreEnDecimal, baseBinaire);

        console.log(`Le nombre ${question1} en base ${question2} est : ${resBinaire}`);
        inputQuestion.close();
    });
});