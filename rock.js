let userScore=0;
let compScore=0;
const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win" );
        msg.innerText=(`User Win!! your ${userChoice} beats ${compChoice}`);
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("you loose" );
        msg.innerText=(`User lose!! ${compChoice} beats your ${userChoice}`);
        msg.style.backgroundColor="red"
    }
}
const drawGame=()=>{
    console.log("game drawn");
    msg.innerText="Draw"
    msg.style.backgroundColor="#081b31"
}
const genComChoice=()=>{
    const options=["rock","paper","scissor"];
    const random=Math.floor(Math.random()*3);
    return options[random];
};
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genComChoice();
    console.log("compChoice=",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        
        else {
           userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
}
