const buttonFirst = document.getElementById("1");
const buttonSecond = document.getElementById("2");
const buttonThird = document.getElementById("3");
const buttonFourth = document.getElementById("4");

const tabContents = document.querySelectorAll(".tab-content");

function resetTabs() {
    buttonFirst.classList.remove("border-black");
    buttonSecond.classList.remove("border-black");
    buttonThird.classList.remove("border-black");
    buttonFourth.classList.remove("border-black");

    // Cacher tous les contenus des onglets
    tabContents.forEach(content => content.classList.add("hidden"));
}

// Fonction pour activer un onglet (ajouter la bordure et afficher son contenu)
function activateTab(button, content) {
    button.classList.add("border-black");  
    content.classList.remove("hidden"); 
}

buttonFirst.addEventListener("click", function () {
    resetTabs();  // Réinitialiser les onglets
    activateTab(buttonFirst, document.getElementById("contentFirst"));
});

buttonSecond.addEventListener("click", function () {
    resetTabs();
    activateTab(buttonSecond, document.getElementById("contentSecond"));
});

buttonThird.addEventListener("click", function () {
    resetTabs();
    activateTab(buttonThird, document.getElementById("contentThird"));
});

buttonFourth.addEventListener("click", function () {
    resetTabs();
    activateTab(buttonFourth, document.getElementById("contentFourth"));
});