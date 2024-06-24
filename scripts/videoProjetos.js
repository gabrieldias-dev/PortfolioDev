
let boxImagem = document.querySelector(".gifSite");
let imagemPatinhas = document.querySelector("#sitePatinhas");

// Adiciona um ouvinte de evento para quando o mouse passar por cima da imagem
boxImagem.addEventListener("mouseover", function () {
  // Altera o atributo src da imagem para a nova imagem
  imagemPatinhas.src = "assets/imagensProjetos/sitePatinhas.gif";
});

// Adiciona um ouvinte de evento para quando o mouse sair da imagem (para voltar à imagem original, se necessário)
boxImagem.addEventListener("mouseout", function () {
  // Volta o atributo src da imagem para a imagem original
  imagemPatinhas.src = "assets/imagensProjetos/sitePatinhas.png";
});



let boxImagemTwo = document.querySelector(".gifSiteTwo");
let happyBowl = document.querySelector("#siteHappyBowl");

// Adiciona um ouvinte de evento para quando o mouse passar por cima da imagem
boxImagemTwo.addEventListener("mouseover", function () {
  // Altera o atributo src da imagem para a nova imagem
  happyBowl.src = "assets/imagensProjetos/siteHappyBowl.gif";
});

// Adiciona um ouvinte de evento para quando o mouse sair da imagem (para voltar à imagem original, se necessário)
boxImagemTwo.addEventListener("mouseout", function () {
  // Volta o atributo src da imagem para a imagem original
  happyBowl.src = "assets/imagensProjetos/siteHappyBowl.png";
});



let boxImagemThree = document.querySelector(".gifSiteThree");
let easyBank = document.querySelector("#siteEasy");

// Adiciona um ouvinte de evento para quando o mouse passar por cima da imagem
boxImagemThree.addEventListener("mouseover", function () {
  // Altera o atributo src da imagem para a nova imagem
  easyBank.src = "assets/imagensProjetos/siteEaysBank.gif";
});

// Adiciona um ouvinte de evento para quando o mouse sair da imagem (para voltar à imagem original, se necessário)
boxImagemThree.addEventListener("mouseout", function () {
  // Volta o atributo src da imagem para a imagem original
  easyBank.src = "assets/imagensProjetos/siteEaysBank.png";
});



