const lista = document.getElementById("lista-filmes");
const esquerda = document.getElementById("esquerda");
const direita = document.getElementById("direita");

direita.addEventListener("click", () => {
    lista.scrollBy({left: 300, behavior: "smooth"});
});

esquerda.addEventListener("click", () => {
    lista.scrollBy({ left: -300, behavior: "smooth"});
});