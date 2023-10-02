
(function(){
    window.sr = ScrollReveal({reset:true});
    sr.reveal('.scroll-1', {
        // rotate: { x: 100, y:0, z:0 },
        duration: 2000});
    sr.reveal('.scroll-2', {duration: 2000});
    sr.reveal('.scroll-header', {duration: 2000})
    
})()

    // Função que vai ser acioanda quando fizer o scroll da pagina, deixando o menu fixo
    window.addEventListener('scroll', function()
    {
        let header = document.querySelector('.scroll-header')

        // Adicionando uma class ao header usando o javascript
        header.classList.toggle('rolagem',window.scrollY > 50)
    })


    



        let spanElement = document.getElementById("copiar-email");
        // Define a palavra que você deseja copiar
        let palavraParaCopiar = "gabrieldias_02@hotmail.com";
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
            spanElement.innerText = "E-mail Copiado!" 
        
            // Define um atraso para restaurar o texto original
            setTimeout(function () {
                spanElement.innerText = "Copiar E-mail";
            }, 3000); // Restaura o texto original após 3 segundos
        });
        
        // Mundaça de cor na Caixa de e-mail
            let mudarcor = document.querySelector('.ende-email')

            spanElement.addEventListener("click", function(){

                mudarcor.style.backgroundColor = '#43DF53a8'

                setTimeout(function () {
                mudarcor.style.backgroundColor = '';
            }, 500); // Restaurar cor original após meio segundo

            })


        
