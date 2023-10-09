

// Function responsável pela aparição dos elementos na página
(function(){
    window.sr = ScrollReveal({reset:true});
    sr.reveal('.scroll-1', {duration: 2000});
    sr.reveal('.scroll-2', {duration: 2000});
})()

 // Função que vai ser acionada quando fizer o scroll da pagina, deixando o menu fixo no topo.
    window.addEventListener('scroll', function()
    {
        let header = document.querySelector('.scroll-header')

        // Adicionando uma class ao header quando o scroll for maior que 50px
        header.classList.toggle('rolagem',window.scrollY > 50)
    })

// Menu selecionado de acordo com a sessão que clicar
    var menuItem = document.querySelectorAll('.nav-menu')

    function selectLink() {
        menuItem.forEach((item) =>
        item.classList.remove('ativo'))
        this.classList.add('ativo')
    }
    menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
    )

    
// Elementos responsáveis por copiar o e-mail. 
// Comentei ele todo pois foi a primeira vez que fiz algo do tipo

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

            // Ação mostrada ao usuario após o click(opcional)
            spanElement.innerText = "E-mail Copiado!" 
        
            // Define um atraso para restaurar o texto original
            setTimeout(function () {
                spanElement.innerText = "Copiar E-mail";
            }, 3000);
        });
        
        // Mundaça de cor na Caixa de e-mail
            let mudarcor = document.querySelector('.ende-email')

            spanElement.addEventListener("click", function(){

                mudarcor.style.backgroundColor = '#43DF53a8'

                setTimeout(function () {
                mudarcor.style.backgroundColor = '';
            }, 500);

            })


        
