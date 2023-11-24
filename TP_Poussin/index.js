// Dans la balise script du bas de votre page
const characters = ["Character1", "Character2", "Character3", "Character4", "Character5"];

const exercise1Div = document.getElementById("exercice1");

const charactersList = document.createElement("ul");

characters.forEach(character => {
  const listItem = document.createElement("li");
  listItem.textContent = character;
  charactersList.appendChild(listItem);
});

exercise1Div.appendChild(charactersList);





// Dans la balise script du bas de votre page
const exercise2Div = document.getElementById("exercice2");

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  exercise2Div.textContent = formattedTime;
}

// Appeler la fonction une fois pour afficher l'heure initiale
updateClock();

// Mettre à jour l'horloge chaque seconde
setInterval(updateClock, 1000);






// Dans la balise script du bas de votre page
const exercise3Div = document.getElementById("exercice3");

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) {
      output += 'fizz';
    }
    if (i % 5 === 0) {
      output += 'buzz';
    }
    if (output === '') {
      output = i;
    }

    const listItem = document.createElement("p");
    listItem.textContent = output;
    exercise3Div.appendChild(listItem);
  }
}

// Appeler la fonction pour générer la liste
fizzBuzz();





// Dans la balise script du bas de votre page
const exercise4Div = document.getElementById("exercice4");
let currentNumber = 0;

function updateNumber() {
  exercise4Div.textContent = currentNumber;
}

function handleIncrement() {
  currentNumber++;
  updateNumber();
}

function handleDecrement() {
  currentNumber--;
  updateNumber();
}

const incrementButton = document.createElement("button");
incrementButton.textContent = "Increment";
incrementButton.addEventListener("click", handleIncrement);

const decrementButton = document.createElement("button");
decrementButton.textContent = "Decrement";
decrementButton.addEventListener("click", handleDecrement);

exercise4Div.appendChild(incrementButton);
exercise4Div.appendChild(decrementButton);

// Afficher le numéro initial
updateNumber();