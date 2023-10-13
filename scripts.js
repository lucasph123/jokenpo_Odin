    let playerScore = 0;
    let cpuScore = 0;


    function getUserChoice()
    {
        let choice = prompt();
        choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();
        return choice;
    }


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

    function roundGame(player,cpu)
    {
        if(player == cpu)
        {
            return 'Tie'
        }
        if(player == 'Rock' && cpu == 'Paper')
        {
            cpuScore++;
            return 'You Lose, Rock loses to Paper';

        }
        if(player == 'Paper' && cpu == 'Scissor')
        {
            cpuScore++;
            return 'You Lose, Paper loses to Scissor';
        }
        if(player == 'Scissor' && cpu == 'Rock')
        {
            cpuScore++;
            return 'You Lose, Scissor loses to Rock';
        }

        if(player == 'Paper' && cpu == 'Rock')
        {
            playerScore++;
            return 'You Won, Paper beats Rock';
        }
        if(player == 'Scissor' && cpu == 'Paper')
        {
            playerScore++;
            return 'You Won, Scissor beats Paper';
        }
        if(player == 'Rock' && cpu == 'Scissor')
        {
            playerScore++;
            return 'You Won, Rock beats Scissor';
        }
        else
        return 'ERROR, WRONG INPUT';
   }

    function game()
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
           
        
            
    }

            console.log(game());