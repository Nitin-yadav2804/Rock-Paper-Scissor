let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".image");
const msg = document.querySelector("#msg");
const result = document.querySelector("#result")
const updatedUserScore = document.querySelector("#your-score");
const updatedCompScore = document.querySelector("#comp-score");

const showWinner = (userWin,userMove,compMove)=>{
    if(userWin===true){
        userScore++;
        updatedUserScore.innerText = (userScore);
        msg.innerText="You Win!";
        msg.style.backgroundColor="#D6CCBA";
        msg.style.color="#3B3936";
        result.style.visibility="visible";
        result.innerText=`Your ${userMove} beats ${compMove}`;
        result.style.backgroundColor="#D6CCBA";
        result.style.color="#3B3936";
    }else{
        compScore++;
        updatedCompScore.innerText = (compScore);
        msg.innerText=`You Loose!`;
        msg.style.backgroundColor="#D6CCBA";
        msg.style.color="##3B3936";
        result.style.visibility="visible";
        result.innerText=`${compMove} beats your ${userMove}`;
        result.style.backgroundColor="#D6CCBA";
        result.style.color="#3B3936";
    
    }
}
const gameDraw = ()=>{
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor="##D6CCBA";
    msg.style.color="#3B3936";
    result.style.visibility = "hidden";
}
const genCompMove = ()=>{
    const options = ["rock","paper","scissor"];
    const num = Math.floor(Math.random()*3);
    return options[num];
}
const playGame = (userMove)=>{
    console.log(userMove);
    const compMove = genCompMove();
    console.log(compMove);
    if(userMove === compMove){
        gameDraw();
    }   else{
            let userWin = true;
            if(userMove === "rock"){
                userWin = compMove==="scissor"? true:false
            }else if(userMove === "paper"){
                userWin = compMove==="rock"? true:false
            }else{
                userWin = compMove==="paper"? true:false
            }
        showWinner(userWin,userMove,compMove);
        }
}
choices.forEach((image)=>{
    image.addEventListener("click",() =>{
        const userMove = image.getAttribute("id");
        playGame(userMove);
    })
})