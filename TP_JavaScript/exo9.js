function sommeTab(tab) {
    if (tab.length === 0) {
      return 0;
    }
  
    //pour calculer la somme des valeurs j'utilise reduce
    let somme = tab.reduce((accumulateur, valeur) => accumulateur + valeur, 0);
    return somme;
}
  
let valTab = [1, 1, 1, 1, 1];
let res = sommeTab(valTab);

console.log("Somme = " + res);