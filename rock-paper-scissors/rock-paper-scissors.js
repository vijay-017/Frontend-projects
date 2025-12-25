const score =  JSON.parse(localStorage.getItem('score')) || {
  wins :0,
  losses :0,
  tie :0
}

updateScoreElement();

let msg = '';
let result ='';
let intervalId;
let isAutoPlay = false;

function autoPlay(){
  if(!isAutoPlay){
    intervalId = setInterval(()=>{
    playGame();
  },1000);
  isAutoPlay = true;
  }
  else{
    clearInterval(intervalId);
    isAutoPlay = false;
  }
  
}


function pickComputerMove(){
  const comPick=Math.random();
  if(comPick >= 0 && comPick < 1/3 )
  {
    msg = 'rock';
  }
  else if(comPick >= 1/3 && comPick < 2/3 )
  {
    msg ='paper';
  }
  else if(comPick >= 2/3 && comPick < 1 )
  {
    msg ='scissors';
  }
}

document.querySelector('.js-rock-btn').addEventListener('click',()=>{
  playGame('rock');
});

document.querySelector('.js-paper-btn').addEventListener('click',()=>{
  playGame('paper');
});

document.querySelector('.js-scissors-btn').addEventListener('click',()=>{
  playGame('scissors');
});

document.body.addEventListener('keydown',(event)=>{
  if(event.key === 'r'){
    playGame('rock');
  }
  else if(event.key === 'p'){
    playGame('paper');
  }
  else if(event.key === 's'){
    playGame('scissors');
  }
})


function playGame(userPick){
  pickComputerMove();
  if(userPick === undefined){
    userAutoPick=Math.random();
    if(userAutoPick >= 0 && userAutoPick < 1/3 )
    {
      userPick = 'rock';
    }
    else if(userAutoPick >= 1/3 && userAutoPick < 2/3 )
    {
     userPick ='paper';
    }
    else if(userAutoPick >= 2/3 && userAutoPick < 1 )
    {
      userPick ='scissors';
    }
  }
  if(userPick === 'rock'){
    if(msg === 'rock')
    {
      result = 'Tie.';
      
    }
    else if(msg === 'paper')
    {
      result ='You lose.';
    
    }
    else if(msg === 'scissors')
    {
      result = 'You win.';
      
    }
  }
  else if(userPick === 'paper'){
    if(msg === 'rock')
    {
      result = 'You win.';
      
    }
    else if(msg === 'paper')
    {
      result ='Tie.';
      
    }
    else if(msg === 'scissors')
    {
      result = 'You lose.';

    }
  }
  else if(userPick === 'scissors'){
    if(msg === 'rock')
    {
      result = 'You lose.';
    
    }
    else if(msg === 'paper')
    {
      result ='You win.';
      
    }
    else if(msg === 'scissors')
    {
      result = 'Tie.';
      
    }
  }

  if(result === 'You win.'){
    score.wins++;
  }
  else if(result === 'You lose.'){
    score.losses++;
  }
  else if(result === "Tie."){
    score.tie++;
  }

  updateScoreElement();

  localStorage.setItem('score',JSON.stringify(score));


  document.querySelector('.result').innerHTML=result;

  document.querySelector('.discribe').innerHTML=`
    You 
  <img src="images/${userPick}-emoji.png" alt="" class="move-icon">
  <img src="images/${msg}-emoji.png" alt="" class="move-icon">
  Computer.
  `;

}
  function updateScoreElement(){
        document.querySelector('.js-score').innerHTML= `Wins :${score.wins}, Losses : ${score.losses}, Tie : ${score.tie}
    `;
    }
