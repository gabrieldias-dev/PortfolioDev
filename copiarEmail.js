// Elementos responsáveis por copiar o e-mail.

let spanElement = document.getElementById("copiar-email");
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

// 

const container = document.querySelector(".container");
document.querySelector(".slider").addEventListener("input", (e) => {
  container.style.setProperty("--position", `${e.target.value}%`);
});



