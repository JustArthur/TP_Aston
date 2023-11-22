let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function chiffreRomain(nombreEnDecimal) {
    //Defini la valeur decimal par le symbol romain
    let symbolesRomains = [
        { valeur: 1000, symbole: 'M' },
        { valeur: 900, symbole: 'CM' },
        { valeur: 500, symbole: 'D' },
        { valeur: 400, symbole: 'CD' },
        { valeur: 100, symbole: 'C' },
        { valeur: 90, symbole: 'XC' },
        { valeur: 50, symbole: 'L' },
        { valeur: 40, symbole: 'XL' },
        { valeur: 10, symbole: 'X' },
        { valeur: 9, symbole: 'IX' },
        { valeur: 5, symbole: 'V' },
        { valeur: 4, symbole: 'IV' },
        { valeur: 1, symbole: 'I' }
    ];

    let nombreRomain = '';

    //Vérifie si une des valeurs possède un symbole romain, si oui il met sinon il met I
    for (let i = 0; i < symbolesRomains.length; i++) {
        while (nombreEnDecimal >= symbolesRomains[i].valeur) {
            nombreRomain += symbolesRomains[i].symbole;
            nombreEnDecimal -= symbolesRomains[i].valeur;
        }
    }

    return nombreRomain;
}

inputQuestion.question('Nombre Decimal : ', (inputUser) => {
    let nombre = parseInt(inputUser);
    let nombreRomain = chiffreRomain(nombre);

    console.log(`Le nombre ${nombre} en chiffres romains est : ${nombreRomain}`);
    inputQuestion.close();
});