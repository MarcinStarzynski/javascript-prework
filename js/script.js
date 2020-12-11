{
    const playerMove = function(playerInput){
        clearMessages();
        const getMoveName = function(argMoveId){
            if(argMoveId == 1){
            return 'kamień';
            } else if(argMoveId == 2){
                return 'papier';
            } else if(argMoveId == 3){
                return 'nożyce';
            }
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1); 

        console.log('Wylosowana liczba to: ' + randomNumber);

        const computerMove = getMoveName(randomNumber);

        printMessage('Mój ruch to: ' + computerMove);

        console.log('Gracz wpisał: ' + playerInput);

        const playerMove = getMoveName(playerInput);

        printMessage('Twój ruch to: ' + playerMove);

        function displayResult(playerMove, computerMove){
            if((computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')){
                return 'Ty wygrywasz';
            }else if(playerMove == computerMove){
                return 'Remis';
            }else {
                return 'Ty przegrywasz';
            }
        } printMessage('Wynik ' +  displayResult(playerMove, computerMove))
    }
  const playRockBtn = document.getElementById('play-rock');
  playRockBtn.addEventListener("click",function(){
    playerMove(1);
  })

  const playPaperBtn = document.getElementById('play-paper');
  playPaperBtn.addEventListener("click",function(){
    playerMove(2);
  })

  const playScissorsBtn = document.getElementById('play-scissors');
  playScissorsBtn.addEventListener("click",function(){
    playerMove(3);
  })
}