let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let hs=0;

let h2=document.querySelector("h2");
let btns=["pink","blue","green","yellow"];

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("started");
    started=true;
    levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let ri=Math.floor(Math.random()*3);//random index
    let rc=btns[ri];  //random color
    let rb=document.querySelector(`.${rc}`); //
    // console.log(ri);
    // console.log(rc);
    // console.log(rb);
    gameseq.push(rc);
    console.log(gameseq);
    gameflash(rb);
}

function checkBtn(idx){
   // console.log("current level:",level);
   //let idx=level-1;

   if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout( levelup,1000);
    }
   }else{
    h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
   }
}

function btnpress(){
    //console.log(this);
    let btn=this;
    userflash(btn);

     uc=btn.getAttribute("id");
     userseq.push(uc); 
     checkBtn(userseq.length-1);      
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

//reset the game
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}