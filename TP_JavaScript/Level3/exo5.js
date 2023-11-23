let readline = require('readline');

let inputQuestion = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculerScoreBowling() {
    let scoreTotal = 0;
    let tourActuel = 1;
    let lancerActuel = 1;
    let lancers = [];

    function demanderQuilles() {
        inputQuestion.question(`Tour N°${tourActuel}, Lancer N°${lancerActuel}: Combien de quilles abattu pour ce lancer ? `, (quillesAbattues) => {
            quillesAbattues = parseInt(quillesAbattues, 10);

            if (quillesAbattues <= 10 && quillesAbattues >= 0) {
                // Ajoute les quilles abattues au score total
                scoreTotal += quillesAbattues;

                //! Les bonus fonctionne à moitier
                if (lancerActuel >= 1) {
                    let précédentLancer = lancers[lancers.length - 1];
                    let avantPrécédentLancer = lancers[lancers.length - 2];

                    if (avantPrécédentLancer === 10) {
                        // Bonus pour un strike
                        scoreTotal += quillesAbattues;
                    } else if (précédentLancer === 10) {
                        // Bonus pour un spare
                        scoreTotal += quillesAbattues;
                    }
                }

                // Ajouter le nombre de quilles abattues au tableau des lancers
                lancers.push(quillesAbattues);
                lancerActuel === 1 ? lancerActuel++ : (lancerActuel = 1);
                if (lancerActuel === 1) {
                    tourActuel++;
                }

                // Gérer les tours spéciaux
                if (tourActuel <= 10) {
                    if (quillesAbattues === 10) {
                        // Pour un strike
                        lancers.push(0); // Placeholder pour le deuxième lancer du strike
                        lancerActuel = 1;
                        tourActuel++;
                    }
                }

                // Afficher le score après chaque lancer
                console.log(`Score actuel = ${scoreTotal}`);

                // Si le tour <= 10 alors il ranlance les quilles
                if (tourActuel <= 10) {
                    demanderQuilles();
                } else {
                    // Sinon le jeu est fini
                    console.log(`Score final = ${scoreTotal}`);
                    inputQuestion.close();
                }
            } else {
                demanderQuilles();
            }
        });
    }

    // Demande un nombre de quilles tombé
    demanderQuilles();
}

// Pour commencer le jeu
calculerScoreBowling();