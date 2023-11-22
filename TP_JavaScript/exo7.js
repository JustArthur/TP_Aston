let readline = require('readline');

let affUser = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

affUser.question('Ton nombre : ', (nombre) => {
  let nombreCalc = parseFloat(nombre);

  if (isNaN(nombreCalc)) {
    console.log('Nombre invalide.');
  } else {
    if (nombreCalc > 0) {
      console.log(`${nombreCalc} = ?ombre positif.`);
    } else if (nombreCalc < 0) {
      console.log(`${nombreCalc} = Nombre négatif.`);
    } else {
      console.log(`${nombreCalc} est nul.`);
    }
  }

  affUser.close();
});