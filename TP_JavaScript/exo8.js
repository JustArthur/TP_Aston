let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inputQuestion.question('Table de : ', (nombreInput) => {
    let nombreInt = parseInt(nombreInput);

    if (isNaN(nombreInt)) {
        console.log('Table invalide.');
    } else {
        for (let i = 1; i <= 10; i++) {
            let resTable = nombreInt * i;
            console.log(`${nombreInt} x ${i} = ${resTable}`);
        }
    }

    inputQuestion.close();
});