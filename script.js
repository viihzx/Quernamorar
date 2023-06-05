function mudarPosicao() {
    var botao = document.querySelector('.botao');
    var janelaAltura = window.innerHeight;
    var janelaLargura = window.innerWidth;

    var novaPosicaoTop = Math.random() * (janelaAltura - botao.offsetHeight);
    var novaPosicaoLeft = Math.random() * (janelaLargura - botao.offsetWidth);
    botao.style.top = novaPosicaoTop + 'px';
    botao.style.left = novaPosicaoLeft + 'px';
}

function exibirImagem() {
    var conteudo = document.querySelector('.container');
    var imagem = document.querySelector('.imagem');

    conteudo.style.display = 'none';
    imagem.style.display = 'block';
}
