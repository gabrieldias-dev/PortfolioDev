
let boxImagem = document.querySelector(".gifSite");
let imagemPatinhas = document.querySelector("#sitePatinhas");

// Adiciona um ouvinte de evento para quando o mouse passar por cima da imagem
boxImagem.addEventListener("mouseover", function () {
  // Altera o atributo src da imagem para a nova imagem
  imagemPatinhas.src = "videoPatinhas.gif";
});

// Adiciona um ouvinte de evento para quando o mouse sair da imagem (para voltar à imagem original, se necessário)
boxImagem.addEventListener("mouseout", function () {
  // Volta o atributo src da imagem para a imagem original
  imagemPatinhas.src = "fotoPatinhas.png";
});



let boxImagemTwo = document.querySelector(".gifSiteTwo");
let happyBowl = document.querySelector("#siteHappyBowl");

// Adiciona um ouvinte de evento para quando o mouse passar por cima da imagem
boxImagemTwo.addEventListener("mouseover", function () {
  // Altera o atributo src da imagem para a nova imagem
  happyBowl.src = "gif2.gif";
});

// Adiciona um ouvinte de evento para quando o mouse sair da imagem (para voltar à imagem original, se necessário)
boxImagemTwo.addEventListener("mouseout", function () {
  // Volta o atributo src da imagem para a imagem original
  happyBowl.src = "siteHappyBowl.png";
});



