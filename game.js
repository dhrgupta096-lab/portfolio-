// Reaction Game
let startTime;
const btn = document.getElementById("reaction-btn");
const result = document.getElementById("result");

function startGame(){
  btn.textContent="Wait...";
  btn.style.background="red";

  const delay=Math.random()*3000+2000;

  setTimeout(()=>{
    btn.textContent="CLICK!";
    btn.style.background="green";
    startTime=new Date().getTime();
  },delay);
}

btn.addEventListener("click",()=>{
  if(btn.textContent==="CLICK!"){
    const time=new Date().getTime()-startTime;
    result.textContent="Reaction: "+time+" ms";
    startGame();
  }
});

startGame();

// Click Counter
let score=0;
function clickGame(){
  score++;
  document.getElementById("clickScore").textContent="Score: "+score;
}
