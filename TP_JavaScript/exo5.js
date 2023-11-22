let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Demande le prix de fabrication
inputQuestion.question('Prix de fabrication : ', (prixFabrication) => {

    //Demande le prix de vente
    inputQuestion.question('Prix de vente : ', (prixVente) => {

        //Met en float pour soustraire le prix de vente par le prix de fabrication
        let res = parseFloat(prixVente) - parseFloat(prixFabrication);

        if (res > 0) {
            console.log(`Profit de ${res} euros.`);

        } else if (res < 0) {
            console.log(`Perte de ${-res} euros.`);

        } else {
            console.log('Pas de profit, Pas de perte.');
        }

        inputQuestion.close();
    });
});