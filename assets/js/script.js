// Array de filmes com info do banner
const filmesData = [
  {
    titulo: "Filme 1",
    descricao: "Descrição do filme 1.",
    imagem: "https://media.themoviedb.org/t/p/w440_and_h660_face/2fXF4GY6eoyjRLjtreVJGajT9WV.jpg",
    banner: "https://via.placeholder.com/1200x400/111111/ffffff?text=Filme+1" // imagem do banner
  },
  {
    titulo: "Filme 2",
    descricao: "Descrição do filme 2.",
    imagem: "https://media.themoviedb.org/t/p/w440_and_h660_face/l1ezVQbjxqnoTPMOLLKQmdTNen1.jpg",
    banner: "https://via.placeholder.com/1200x400/222222/ffffff?text=Filme+2"
  },
  {
    titulo: "Filme 3",
    descricao: "Descrição do filme 3.",
    imagem: "https://media.themoviedb.org/t/p/w440_and_h660_face/2peYXW6CoruehDnKJGMjl2NuaNB.jpg",
    banner: "https://via.placeholder.com/1200x400/333333/ffffff?text=Filme+3"
  }
];

// Seleciona elementos do banner
const banner = document.getElementById("banner");
const bannerTitulo = document.getElementById("banner-titulo");
const bannerDesc = document.getElementById("banner-desc");

// Lista e botões
const lista = document.getElementById("lista-filmes");
const esquerda = document.getElementById("esquerda");
const direita = document.getElementById("direita");

direita.addEventListener("click", () => {
  lista.scrollBy({ left: 300, behavior: "smooth" });
});
esquerda.addEventListener("click", () => {
  lista.scrollBy({ left: -300, behavior: "smooth" });
});

// Adicionar evento de clique nas imagens
const imagens = lista.querySelectorAll("img");
imagens.forEach((img, index) => {
  img.addEventListener("click", () => {
    const filme = filmesData[index];
    banner.style.background = `url("${filme.banner}") no-repeat center/cover`;
    bannerTitulo.textContent = filme.titulo;
    bannerDesc.textContent = filme.descricao;
  });
});
