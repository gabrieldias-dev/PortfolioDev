 // Obtém o elemento span pelo ID
        var spanElement = document.getElementById("copiar-email");

        // Define a palavra que você deseja copiar
        var palavraParaCopiar = "Exemplo";

        // Adiciona um evento de clique ao elemento span
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
            document.execCommand('copy');

            // Remove o elemento de área de texto temporário da página
            document.body.removeChild(textArea);

            // Ação de feedback (opcional)
            spanElement.innerText = "Palavra Copiada!";

            // Define um atraso para restaurar o texto original
            setTimeout(function () {
                spanElement.innerText = "Gabrieldias_02@hotmail.com";
            }, 1000); // Restaura o texto original após 1 segundo
        });