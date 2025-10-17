let btn = document.querySelector(".box");
let box = document.querySelector(".box");
let h2 = document.querySelector("h2");
let body = document.querySelector("body");

guess = [];
user=[];

let level = 0;
let started = false;

addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelup();
  }
});

function gameflash(randBtn) {
  randBtn.classList.add("flash");
  setTimeout(function () {
    randBtn.classList.remove("flash");
  }, 300);
}

function userflash(randBtn) {
  randBtn.classList.add("uflash");
  setTimeout(function () {
    randBtn.classList.remove("uflash");
  }, 300);
}

function check(){
  idx=user.length-1;
  if(user[idx]===guess[idx]){
    if(user.length==guess.length){
      setTimeout(levelup, 1000);
      
      
    }

  }else{
      h2.innerHTML = `Game Over!!! <b>your score is ${level}</b> <br> Press any key to start`;
      reset();
    }
}

function btnpress(){
  userflash(this);
  console.log(this);

  presscolor=this.id;
  user.push(`${presscolor}`);

  check();


}

function levelup() {
  user=[];
  level++;
  h2.innerText = `Level ${level}`;
  let colors = ["red", "yellow", "purple", "green"];
  let randIndex = Math.floor(Math.random() * 4);
  let randcolor = colors[randIndex];
  let randBtn = document.querySelector(`.${randcolor}`);
  gameflash(randBtn);

  guess.push(`${randcolor}`);

}


let btns = document.querySelectorAll(".box");
for (let btn of btns) {
  btn.addEventListener("click", btnpress);

}

function reset(){
  started=false;
  level=0;
  guess = [];
  user=[];


}



projectdsoop-dotcom