// varibules & UI varibaules
var playBtn = document.querySelector('#play'),
    gameStart = document.querySelector('.game-start'),
    gameOver = document.querySelector('.game-over'),
    playAgainBtn = document.querySelector('#play-again'),
    scoreSpan = document.querySelector('#score'),
    lifeSpan = document.querySelector('#life'),
    hen = document.querySelector('.hen'),
    hen1 = document.querySelector('#hen1'),
    hen2 = document.querySelector('#hen2'),
    hen3 = document.querySelector('#hen3'),

    eggs = document.querySelector('.egg'),
    egg1 = document.getElementById('egg1'),
    egg2 = document.getElementById('egg2'),
    egg3 = document.getElementById('egg3'),
    basket = document.querySelector('#basket'),
    basketScore = document.querySelector('#basketScore'),
    playScore = document.querySelector('#play-score'),
    floor = document.querySelector('#floor'),
    life=10,
    score=0,
    nameID=0,

    eggEniPos = 40,
    speed = 2,
    currentPosForEggs=0;


    var eggPos =eggs.style.top=eggEniPos + 'px';
    var endPooint =  window.innerHeight - floor.clientHeight ;  


    // play btn 
    playBtn.onclick=function(){        
        gameStart.style.display='none';

        theGame()
      //  nameID = requestAnimationFrame(theGame);

    }
   
    // the game func.
    function theGame(){
       
        if (checkEggOnFloor(egg1) || checkEggInBasket(egg1)){
            setEggInBegain(egg1)
        }else{
            eggsDropDown(egg1);
        }

        if (checkEggOnFloor(egg2) || checkEggInBasket(egg2)){
            setEggInBegain(egg2)
        }else{
            eggsDropDown(egg2);
        }

        if (checkEggOnFloor(egg3) || checkEggInBasket(egg3)){
            setEggInBegain(egg3)
        }else{
            eggsDropDown(egg3);
        }


        if( life > 0){
            nameID = requestAnimationFrame(theGame);

        }else{
            stopGame();
        }    
       
    }


    // controll baslet by mouse move
    document.onmousemove=function(e){
     //   console.log(e.pageX)
     var mouseValue = e.pageX
     basket.style.left = mouseValue+'px'
     //  console.log(basket.style.left)
    }

    // eggs dropdown 
    function eggsDropDown(egg){       
        eggCurrentPos = egg.offsetTop ; 
        // currentPosForEggs = parseInt(eggs.style.top);
        egg.style.top =( eggCurrentPos + speed ) + 'px';
     //  return x = egg.style.top;
       
            
    }
  
// check egg with floor
function checkEggOnFloor(egg){
  if (collision(egg , floor)){   
      //show broken egg
      showBrokenEgg(egg);
      //Decrement life
      decrementLife();
      return true
  }
  return false
}

function setEggInBegain(egg){
    egg.style.top = eggEniPos + 'px';
}

//decremnt life 
function decrementLife(){
    life-- ;
    lifeSpan.textContent=life
}

// show broken egg func.
function showBrokenEgg(egg){
    numEgg = egg.getAttribute('data-brokeneg');
    document.querySelector('#brokeneg'+numEgg).style.display='block';
    hideBrokenEgg(numEgg);
    
}

//hide broken egg
function hideBrokenEgg(numEgg){
    setTimeout(function(){
        document.querySelector('#brokeneg'+numEgg).style.display='none';

    },800)
}



//check egg with basket
function checkEggInBasket(egg){
    if (collision( egg , basket)){   

        upadateScore();
       // console.log('in basket ')
        return true
    }

    return false
  }  

function upadateScore(){
    score++;
    if (score %5 ==0){
        speed++ ;
    }
    scoreSpan.textContent=score;
    basketScore.textContent=score;
    
}

//stop game func 
function stopGame(){
    nameID = cancelAnimationFrame(theGame);
    gameOver.style.display='block';
    playScore.textContent=score;
}




playAgainBtn.onclick=function(){
    location.reload();
}


























