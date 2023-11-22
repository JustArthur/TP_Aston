const notes = [1, 5, 12, 15, 19];

function commenterNotes(listeNotes) {
    listeNotes.forEach(note => {
        if (note >= 0 && note <= 4) {
            console.log(`${note} : Catastrophique, il faut tout revoir`);

        } else if (note >= 5 && note <= 10) {
            console.log(`${note} : Insuffisant`);

        } else if (note >= 11 && note <= 14) {
            console.log(`${note} : Peut mieux faire`);

        } else if (note >= 15 && note <= 17) {
            console.log(`${note} : Bien`);

        } else if (note >= 18 && note <= 20) {
            console.log(`${note} : Excellent, bon travail`);

        } else {
            console.log(`${note} : Note invalide, veuillez vérifier`);
        }
    });
}

commenterNotes(notes);