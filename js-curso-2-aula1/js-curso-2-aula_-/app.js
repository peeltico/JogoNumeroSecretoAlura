let listaDeNumerosSorteados = [];
let numeroDeVezes = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial()
{
    exibirTextoNaTela('h1', 'Joguinho');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroDeVezes}:`);
}

exibirMensagemInicial();

function verificarChute()
{
    let chute = document.querySelector('input').value;;
    if (chute == numeroSecreto)
    {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (chute > numeroSecreto)
    {
        exibirTextoNaTela('p', `O número é menor que ${chute}!`);
    }
    else
    {
        exibirTextoNaTela('p', `O número é maior que ${chute}!`);
    }   
    tentativas++;
    limparBarra()
}

function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random() * numeroDeVezes + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroEscolhido)
        {
            listaDeNumerosSorteados = []
        }

    if (listaDeNumerosSorteados.includes(numeroEscolhido))
        return gerarNumeroAleatorio();
    else
    {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparBarra()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparBarra()
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}