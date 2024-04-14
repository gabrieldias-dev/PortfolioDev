 window.sr = ScrollReveal({ reset: true });
 sr.reveal(".scroll-1", { duration: 2000 });
 sr.reveal(".scroll-2", { duration: 2000 });
 sr.reveal(".scroll-3", { duration: 2000 });


window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  menuAtivado(inicio);
  menuAtivado(sobre);
  menuAtivado(projetos);
  menuAtivado(habilidades);
}

function showNavOnScroll() {
  const navigation = document.querySelector(".scroll-header");
 
  navigation.classList.toggle("rolagem", window.scrollY > 90);
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








 

