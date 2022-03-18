// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)



// Lorsque la souris bouge, ex: un cercle suis la souris
const cursor = document.querySelector("#cursor");
window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
})

const mousemove1 = document.querySelector("#mouse1");
window.addEventListener("mousemove", (e) => {
    mousemove1.style.left = e.pageX + "px";
    mousemove1.style.top = e.pageY + "px";
})
const mousemove2 = document.querySelector("#mouse2");
window.addEventListener("mousemove", (e) => {
    mousemove2.style.left = e.pageX + "px";
    mousemove2.style.top = e.pageY + "px";
})

