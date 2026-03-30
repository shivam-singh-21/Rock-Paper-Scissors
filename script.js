let useScore=0;
let compScore=0;

const userScorePara= document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score") ;
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const resetbtn=document.querySelector("#resetBtn");
const drawGame = () =>{
console.log("game was draw.");
msg.innerHTML="Match Draw !";
msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
   useScore++
   userScorePara.innerHTML=useScore
   msg.innerHTML=`You Win! Your ${userChoice} beats ${compChoice}`; 
   msg.style.backgroundColor = "green";
    }
    else{
    compScore++;
    compScorePara.innerHTML=compScore
        msg.innerHTML = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () =>{
let options=["rock","paper","scissors"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};

const playGame =(userChoice) =>{
console.log("user choice = ",userChoice);
const compChoice = genCompChoice();
console.log("Comp choice = ",compChoice)

if(userChoice==compChoice){
    drawGame();
}
else{
    let userWin = true;
    if(userChoice==="rock"){
        userWin=compChoice === "paper"? false : true;
    }
    else if(userChoice ==="paper"){
        userWin = compChoice === "scissors"? false : true;
    }
    else{
        userWin= compChoice==="rock"? false: true;
    }
 showWinner(userWin,userChoice,compChoice);
}

};

choices.forEach((choice) => {
choice.addEventListener("click",()=> {
const choiceId = choice.querySelector("img").getAttribute("id");
playGame(choiceId);
});
});

const reset = () =>{
useScore=0;
compScore=0;
userScorePara.innerHTML=useScore;
compScorePara.innerHTML=compScore;
msg.innerHTML="Start New Game";
msg.style.backgroundColor=("#081b31");
};
resetbtn.addEventListener("click",reset);

