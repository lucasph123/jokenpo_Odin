    let playerScore = 0;
    let cpuScore = 0;

    function getComputerChoice()
    {
        let choice = Math.floor(Math.random()*3);
        if( choice == 0)
        {
            return 'Rock';
        }
        if(choice == 1)
        {
            return 'Paper';
        }
        if(choice == 2)
        {
            return 'Scissor';
        }
    }
    
    const textScore = document.querySelector('.results');
    const resultDiv = document.createElement('p');
    const scoreDiv = document.createElement('p');
    textScore.appendChild(resultDiv);
    textScore.appendChild(scoreDiv);
    const btnReset = document.createElement('button')
    btnReset.textContent = 'Resetar';
    textScore.appendChild(btnReset);

    btnReset.addEventListener('click', () => 
    {
        resultDiv.textContent = '';
        scoreDiv.textContent = '';
        cpuScore=0;
        playerScore=0;
        })
    


    function roundGame(player,cpu)
    {
        if(cpuScore == 5 || playerScore == 5)
        {
            resultDiv.textContent = 'You won, Congratulations';
            scoreDiv.textContent = 'Player:' + playerScore + 'CPU:' + cpuScore;
        }
        else
        {
        
            if(player == cpu)
            {
                resultDiv.textContent = 'Tie';
                scoreDiv.textContent = 'Player:' + playerScore + 'CPU:' + cpuScore;
                return;
            }
            if(player == 'Rock' && cpu == 'Paper')
            {
                cpuScore++;
                resultDiv.textContent = 'You lose, Rock loses to Paper';
                scoreDiv.textContent = 'Player:' + playerScore + 'CPU:' + cpuScore;
                return;

            }
            if(player == 'Paper' && cpu == 'Scissor')
            {
                cpuScore++;
                resultDiv.textContent = 'You Lose, Paper loses to Scissor';
                scoreDiv.textContent = 'Player:' + playerScore + 'CPU:' + cpuScore;
                return ;
            }
            if(player == 'Scissor' && cpu == 'Rock')
            {
                cpuScore++;
                resultDiv.textContent = 'You Lose, Scissor loses to Rock';
                scoreDiv.textContent = 'Player:' + playerScore + 'CPU:' + cpuScore;
                return ;
            }

            if(player == 'Paper' && cpu == 'Rock')
            {
                playerScore++;
                resultDiv.textContent = 'You Won, Paper beats Rock';
                scoreDiv.textContent = 'Player:' + playerScore + 'CPU:' + cpuScore;
                return ;
            }
            if(player == 'Scissor' && cpu == 'Paper')
            {
                playerScore++;
                resultDiv.textContent = 'You Won, Scissor beats Paper';
                scoreDiv.textContent = 'Player:' + playerScore + 'CPU:' + cpuScore;
                return ;
            }
            if(player == 'Rock' && cpu == 'Scissor')
            {
                playerScore++;
                resultDiv.textContent = 'You Won, Rock beats Scissor';
                scoreDiv.textContent = 'Player:' + playerScore + 'CPU:' + cpuScore;
                return ;
            }
            else
            return 'ERROR, WRONG INPUT';
        }
   }

  /*  function game()
    {
      do{
            console.log(roundGame(getUserChoice(),getComputerChoice()));
            console.log('Player:'+ playerScore + 'CPU:'+ cpuScore)
            if(playerScore == 5)
            {
                return 'You Won the Game';
            }
            if(cpuScore == 5)
            {
                return 'You Lose the Game';
            }
        }while(true);
        
    } */


    
