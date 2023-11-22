let readline = require('readline');

let consoleUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

consoleUser.question('Premier nombre : ', (nombre1) => {
    consoleUser.question('Deuxième nombre : ', (nombre2) => {
        let res = parseFloat(nombre1) + parseFloat(nombre2);
        console.log(`${nombre1} + ${nombre2} = ${res}`);
        consoleUser.close();
    });
});