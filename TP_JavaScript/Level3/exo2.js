let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function leJeu(nombreAleatoire, tentatives) {
    inputQuestion.question(`Devinez le nombre en moins de ${tentatives} tentative(s) : `, (reponse) => {
        let reponseUser = parseInt(reponse);

            //Si le User trouve alors il gagne
            if (reponseUser === nombreAleatoire) {
                console.log('Bravo, vous avez deviné le bon nombre !');
                inputQuestion.close();

            } else {
                if (reponseUser < nombreAleatoire) {
                    //Si la réponse est inférieur à mon random
                    console.log('Plus grand !');
                } else {

                    //Si la réponse est suppérieure à mon random
                    console.log('Plus petit !');
                }

                //Retire une vie
                tentatives--;

                //Fait perdre le joueur si sa vie est === à 0
                if (tentatives === 0) {
                    console.log('Dommage, vous avez épuisé toutes vos tentatives. Le nombre correct était ' + nombreAleatoire);
                    inputQuestion.close();
                } else {

                    //sinon il relance le jeu
                    console.log(`Il vous reste ${tentatives} tentatives.`);
                    leJeu(nombreAleatoire, tentatives);
                }
            }
    });
}

//Demande un nombre max
inputQuestion.question('Nombre maximum pour le jeu : ', (nombreMax) => {

    //Demande le nombre de tentative
    inputQuestion.question('Nombre tentaive pour trouver : ', (nbrTentatives) => {
        let max = parseInt(nombreMax);

        if (isNaN(max) || max < 1) {
            console.log('Nombre entier positif requis.');
            inputQuestion.close();

        } else {
            //Choisi un nombre random entre 0 et le max choisi
            let nombreAleatoire = Math.floor(Math.random() * (max + 1));
            let tentatives = parseInt(nbrTentatives);

            console.log('Bienvenue dans le jeu de deviner le nombre entre 0 et ' + max + ' !');

            //Lance le jeu
            leJeu(nombreAleatoire, tentatives);
        }
    });
});