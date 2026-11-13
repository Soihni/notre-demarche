// 1. Récupérer les trois boutons En savoir plus
const boutons = document.querySelectorAll(".carte-bouton");

// 2. Pour chaque bouton, écouter le clic
for (const bouton of boutons) {
  bouton.addEventListener("click", function () {
    // 3. Trouver la carte : le parent du bouton
    const carte = bouton.parentElement;
    // 4. Ouvrir ou fermer la carte : ajouter ou enlever la classe est-ouvert
    carte.classList.toggle("est-ouvert");
  });
}
