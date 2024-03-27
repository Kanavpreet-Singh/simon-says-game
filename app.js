let gameSeq=[];
let userSeq=[]; 
let btns=["red","yellow","green","purple"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){{
        btn.classList.remove("gameflash");
    }},250)

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){{
        btn.classList.remove("userflash");
    }},250)

}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];

    let randbtn=document.querySelector(`.${randColor}`);
    gameFlash(randbtn);
    
    gameSeq.push(randColor);

    
}
function checkAns(idx){
    
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText=`Game Over! Press any key to start again. your score is ${level-1}`

        reset();
    }
    
}
function btnPress(){
   let btn=this;
   userFlash(btn);
   let userColor=btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);


}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
     
}
function reset(){
    level=0;
    started=false;
    gameSeq=[];
    userSeq=[];
}