let readline = require('readline');

let affUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

affUser.question('Prix de fabrication : ', (prixFabrication) => {
    affUser.question('Prix de vente : ', (prixVente) => {
        let res = parseFloat(prixVente) - parseFloat(prixFabrication);

        if (res > 0) {
            console.log(`Profit de ${res} euros.`);

        } else if (res < 0) {
            console.log(`Perte de ${-res} euros.`);

        } else {
            console.log('Pas de profit, Pas de perte.');
        }

        affUser.close();
    });
});