// 1. Pegamos os elementos que vamos usar da página (o botão e o corpo do site)
const botao = document.getElementById('botao-tema'); // <-- CORRIGIDO: sem o acento "õ"
const corpoDaPagina = document.body;
const headerPagina = document.querySelector('header');
const footerPagina = document.querySelector('footer');

// 2. Criamos a função que vai rodar toda vez que o botão for clicado
botao.addEventListener('click', () => {

    // Liga/Desliga a classe 'modo-escuro' no body do HTML
    corpoDaPagina.classList.toggle('modo-escuro');
    headerPagina.classList.toggle('modo-escuro');
    footerPagina.classList.toggle('modo-escuro');

    // (Opcional) Muda o texto do botão para avisar o usuário
    if (corpoDaPagina.classList.contains('modo-escuro')) {
        botao.innerText = "Alternar Modo Claro";
    } else {
        botao.innerText = "Alternar Modo Escuro";
    }
});