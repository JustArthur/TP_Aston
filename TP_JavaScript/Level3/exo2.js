let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function leJeu(nombreAleatoire, tentatives) {
    inputQuestion.question(`Devinez le nombre en moins de ${tentatives} tentative(s) : `, (reponse) => {
        let reponseUser = parseInt(reponse);

            if (reponseUser === nombreAleatoire) {
                console.log('Bravo, vous avez deviné le bon nombre !');
                inputQuestion.close();

            } else {
                if (reponseUser < nombreAleatoire) {
                    console.log('Plus grand !');
                } else {
                    console.log('Plus petit !');
                }

                //Retire une vie
                tentatives--;

                if (tentatives === 0) {
                    console.log('Dommage, vous avez épuisé toutes vos tentatives. Le nombre correct était ' + nombreAleatoire);
                    inputQuestion.close();
                } else {
                    console.log(`Il vous reste ${tentatives} tentatives.`);
                    leJeu(nombreAleatoire, tentatives);
                }
            }
    });
}

inputQuestion.question('Nombre maximum pour le jeu : ', (nombreMax) => {
    inputQuestion.question('Nombre tentaive pour trouver : ', (nbrTentatives) => {
        let max = parseInt(nombreMax);

        if (isNaN(max) || max < 1) {
            console.log('Nombre entier positif requis.');
            inputQuestion.close();

        } else {
            let nombreAleatoire = Math.floor(Math.random() * (max + 1));
            let tentatives = parseInt(nbrTentatives);

            console.log('Bienvenue dans le jeu de deviner le nombre entre 0 et ' + max + ' !');
            leJeu(nombreAleatoire, tentatives);
        }
    });
});