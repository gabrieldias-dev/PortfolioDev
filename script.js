window.sr = ScrollReveal({ reset: true });
sr.reveal(".scroll-1", { duration: 2000 });
sr.reveal(".scroll-2", { duration: 2000 });


// // Função que vai ser acionada quando fizer o scroll da pagina, deixando o menu fixo no topo.
// window.addEventListener("scroll", function () {
//   let header = document.querySelector(".scroll-header");

//   // Adicionando uma class ao header quando o scroll for maior que 50px
//   header.classList.toggle("rolagem", window.scrollY > 50);
// });

// // Menu selecionado de acordo com a sessão que clicar
// var menuItem = document.querySelectorAll(".nav-menu");

// function selectLink() {
//   menuItem.forEach((item) => item.classList.remove("ativo"));
//   this.classList.add("ativo");
// }
// menuItem.forEach((item) => item.addEventListener("click", selectLink));


window.addEventListener("scroll", onScroll);
onScroll();

// Função responsável por gerenciar as funções do scroll na pagina
function onScroll() {
  showNavOnScroll();
  menuAtivado(inicio);
  menuAtivado(sobre);
  menuAtivado(projetos);
  menuAtivado(habilidades);
}

function showNavOnScroll() {
  const navigation = document.querySelector(".scroll-header");
  if (scrollY > 10) {
    navigation.classList.add("rolagem");
  } else {
    navigation.classList.remove("ativo");
  }

  navigation.classList.toggle("rolagem", window.scrollY > 50);
}

function menuAtivado(section) {
  //linha alvo
  const linhaAlvo = scrollY + innerHeight / 2;

  //verificar se a seção passou da linha (targerLine)
  let TopoDaSecao = section.offsetTop;
  let AlturaDaSecao = section.offsetHeight;

  // o topo da seção chegou ou ultrapassou a linha alvo
  const secaoPassouDaLinhaAlvo = linhaAlvo >= TopoDaSecao;

  //Verificando onde a seção termina
  let sectionEndsAt = TopoDaSecao + AlturaDaSecao;

  //o final da seção passou da linha alvo
  const secaoNaoPassoudaLinha = sectionEndsAt <= linhaAlvo;

  //limites da seção
  let limitesDaSecao = secaoPassouDaLinhaAlvo && !secaoNaoPassoudaLinha;
  let sectionId = section.getAttribute("id");

  let menuElement = document.querySelector(`.menu a[href*= ${sectionId}]`);

  menuElement.classList.remove("ativo");

  if (limitesDaSecao) {
    menuElement.classList.add("ativo");
  }
}












// Elementos responsáveis por copiar o e-mail.
// Comentei ele todo pois foi a primeira vez que fiz algo do tipo

let spanElement = document.getElementById("copiar-email");

// Define a palavra que você deseja copiar
let palavraParaCopiar = "gabrieldias_dev@outlook.com";
spanElement.addEventListener("click", function () {
  // Cria um elemento de área de texto temporário
  var textArea = document.createElement("textarea");

  // Define o texto a ser copiado como o valor do elemento de área de texto
  textArea.value = palavraParaCopiar;

  // Adiciona o elemento de área de texto à página
  document.body.appendChild(textArea);

  // Seleciona o texto dentro do elemento de área de texto
  textArea.select();

  // Copia o texto para a área de transferência
  document.execCommand("copy");

  document.body.removeChild(textArea);

  // Ação mostrada ao usuario após o click(opcional)
  spanElement.innerText = "E-mail Copiado!";

  // Define um atraso para restaurar o texto original
  setTimeout(function () {
    spanElement.innerText = "Copiar E-mail";
  }, 3000);
});


let mudarcor = document.querySelector(".ende-email");
spanElement.addEventListener("click", function () {
  mudarcor.style.backgroundColor = "#43DF53a8";

  setTimeout(function () {
    mudarcor.style.backgroundColor = "";
  }, 500);
});
