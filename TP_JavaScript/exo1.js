let readline = require('readline');

let affUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

affUser.question('Saisie ton prénom : ', (resUser) => {
    console.log(`Bienvenue ${resUser} !`);
    affUser.close();
});