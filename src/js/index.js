//pega os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
const botoes = document.querySelectorAll('.botao');  // o  . server como seletor //

// pega os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice )=> {
    botao.addEventListener("click", () => {
        // verifica se já existe um botão selecionado, se sim, devemos remover a seleção dele 
        desselecionarBotao();
        //verifica se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
        desselecionarPersonagem();
        //adiciona a classe "selecionado" no botão que o usuário clicou
        botao.classList.add("selecionado");
        //adiciona a classe "selecionado" no personagem que o usuário selecionou
        personagens[indice].classList.add("selecionado");
    })
})

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

