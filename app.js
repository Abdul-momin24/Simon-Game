//initialisaitons
let gameSeq=[];
let userSeq=[];
let btns=["red", "blue", "purple", "yellow"];
let started = false;
let gameCount = 0;
let level =0;
let h4 = document.querySelector('h2');
let h3 = document.querySelector('h3');


// Here we started game 
document.addEventListener("keypress", function(){
    if(started ==false){
        console.log("game satarted");
        started = true;
        levelUp();
    }

});

// Here we give the function of adding flaash to the button
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },200);
}


// This is a function which keep record of the highest score ;
function highestScore(){
    if(gameCount <= level){
        
        gameCount++;
        h4.innerText =`Highest score ${gameCount}`;
        
    }
    return gameCount;
}


// Here we level up and keep account of how many times 
function levelUp(){

    highestScore();
    userSeq=[];
    level++;
    h3.innerText= `level ${level}`;
    let randIDx= Math.floor(Math.random()*4);
    // console.log(randIDx);
    let randColor = btns[randIDx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn); //Calling the function to flash the random button
};



// Checking user and game seq
function checkAns(idx){
    if(userSeq[idx]== gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    }
    else{
        h3.innerHTML =`Game over! your score was <b>${level}</b><br>Press any key to Restart`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);

    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started =false;
    console.log(`${gameCount}`);
    
    level=0;   
    gameSeq=[];
    userSeq=[]; 
}