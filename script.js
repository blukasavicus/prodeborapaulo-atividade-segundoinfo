document.addEventListener('DOMContentLoaded', function() {
    const perguntas = document.querySelectorAll('.pergunta');
    const botoesResposta = document.querySelectorAll('.botao-resposta');
    const resultadoContainer = document.querySelector('.resultado-container');
    const imagemResultado = document.getElementById('imagemResultado');
    const textoResultado = document.getElementById('textoResultado');
    const botaoRefazer = document.getElementById('botaoRefazer');

    let perguntaAtual = 0;
    let contadorSim = 0;

    function mostrarProximaPergunta() {
        perguntas[perguntaAtual].classList.remove('active');
        perguntaAtual++;
        if (perguntaAtual < perguntas.length) {
            perguntas[perguntaAtual].classList.add('active');
        } else {
            exibirResultado();
        }
    }

    botoesResposta.forEach(botao => {
        botao.addEventListener('click', function() {
            const resposta = botao.getAttribute('data-answer');
            if (resposta === 'sim') {
                contadorSim++;
            }
            mostrarProximaPergunta();
        });
    });

    function exibirResultado() {
        let status = "Inocente";
        let imagemSrc = "";
        if (contadorSim >= 9) {
            status = "Culpado";
            imagemSrc = "./imgs/culpado.jpg"; 
        } else if (contadorSim >= 5) {
            status = "Suspeito";
            imagemSrc = "./imgs/suspeito.jpg";
        } else {
            imagemSrc = "./imgs/inocente.jpeg";
        }

        resultadoContainer.style.display = 'block';
        imagemResultado.src = imagemSrc;
        textoResultado.textContent = `Resultado: ${status}`;
    }

    botaoRefazer.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
    
    perguntas[0].classList.add('active');
});

