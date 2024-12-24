//pegando os valores das jogadas que aparecerá no jogo 
const ShowPcPlay = document.getElementById('ShowPcPlay');
const ShowPlayerPlay = document.getElementById('ShowPlayerPlay');


let botScore = 0;
let youScore = 0;

const checkendgame = () => {
  if (botScore === 5) {
    alert(`Você Perdeu: ${botScore} \nVocê ganhou: ${youScore} \nDERROTA`);
    botScore = 0;
    youScore = 0;
  } else if (youScore === 5) {
    alert(`Você Perdeu: ${botScore} \nVocê ganhou: ${youScore} \nVITORIA`);
    botScore = 0;
    youScore = 0;
  }
}

function ToPlay(PlayMove) {
    //jogada aleatoria do bot
    const Move = ['rock👊', 'paper🤚', 'scissors✌'];
    const RandomComputerMove = Move[Math.floor(Math.random() * Move.length)];

    //animação de desativar o botão após clicado
    const buttons = document.querySelectorAll('.buttons');

      // Desativa todos os botões e inicializa o contador
      buttons.forEach((btn) => {
        btn.disabled = true;
        btn.originalText = btn.textContent; // Salva o texto original do botão
        btn.textContent = '4s'; // Define o texto inicial do contador
      });

      let tempo = 4; // Contador inicial
      const interval = setInterval(() => {
        tempo--; // Decrementa o contador
        buttons.forEach((btn) => {
          btn.textContent = `${tempo}s`; // Atualiza o texto para todos os botões
        });

        if (tempo <= 0) {
          clearInterval(interval); // Para o intervalo quando o tempo acabar
          buttons.forEach((btn) => {
            btn.disabled = false; // Reativa todos os botões
            btn.textContent = btn.originalText; // Restaura o texto original
          });
        }
      }, 1000); // Atualiza a cada 1 segundo


      
    //exibindo resultados das jogadas
        ShowPcPlay.innerHTML = `${RandomComputerMove}`;
        ShowPlayerPlay.innerHTML = `${PlayMove}`;
    setTimeout(() => {
        ShowPcPlay.innerHTML = ``;
        ShowPlayerPlay.innerHTML = ``;
    },2500);
    

    if (PlayMove === 'paper🤚' && RandomComputerMove === 'scissors✌' ||
        PlayMove === 'rock👊' && RandomComputerMove === 'paper🤚' ||
        PlayMove === 'scissors✌' && RandomComputerMove === 'rock👊') {
           botScore++;
           //atualizar o valor de let e aparecerá na tela o resultado. 
           document.getElementById('Bot-score').textContent = botScore;
           setTimeout(() => {
            ShowPcPlay.innerHTML = '+1';
           },1000);
           

        } else if (PlayMove === RandomComputerMove) {
            document.getElementById('You-score').textContent = youScore;
            document.getElementById('Bot-score').textContent = botScore;
            setTimeout(() => {
                ShowPcPlay.innerHTML = '-';
                ShowPlayerPlay.innerHTML = '-';
               },1000);
        } else {
            youScore++;
            document.getElementById('You-score').textContent = youScore;   
            setTimeout(() => {
                ShowPlayerPlay.innerHTML = '+1';
               },1000);
        }

        checkendgame();
}
