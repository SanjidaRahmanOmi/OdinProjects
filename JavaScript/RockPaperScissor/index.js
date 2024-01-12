function getComputerChoice() {
    const random = Math.floor((Math.random() * 3) + 1);
    if (random === 1) {
      return "Rock";
    } else if (random === 2) {
      return "Paper";
    } else if (random === 3) {
      return "Scissor";
    }
  }

  function playRound(playerSelection, computerSelection){
    if(playerSelection===computerSelection){
      console.log(`It is a tie.`);
    }
    else if((playerSelection==="Rock" && computerSelection==="Scissor")||
    (playerSelection==="Paper" && computerSelection==="Rock")||
    (playerSelection==="Scissor" && computerSelection==="Paper")){
      console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    }
    else{
      console.log(`You loss! ${computerSelection} beats ${playerSelection}`)
    }
  }
  /*const player="rock";
  const playerSelection = player.toLowerCase();
  const computerSelection = getComputerChoice().toLowerCase();
  console.log(computerSelection)
  playRound(playerSelection, computerSelection);*/
  
  function game(){
    let round;
    for(round=1;round<=5;round++){
      const playerChoice = "Rock";
      const player = playerChoice.toLowerCase();
      const computer = getComputerChoice().toLowerCase();
      console.log(`Round Number:${round}`);
      console.log(`Player chose ${player}`);
      console.log(`Computer chose ${computer}`);
      const roundResult = playRound(player, computer);
      console.log(roundResult);
    }  
      game();
  }

  