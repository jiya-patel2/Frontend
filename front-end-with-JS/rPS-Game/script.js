let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoint = document.querySelector("#user-score");
const compPoint = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock","paper","scissor"];
    let i = Math.floor(Math.random() * 3);
    return option[i];
}
const showWinner =(userWin,userChoice,compChoice) => {
    if(userWin){
        console.log("you win!");
        msg.innerText = `You win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userPoint.innerText = userScore;

    }else{
        console.log("Comp wins!");
        msg.innerText = `You lose ${compChoice} beats ${userChoice}`;;
        msg.style.backgroundColor = "red";
        compScore++;
        compPoint.innerText = compScore;
    }
}

const drawGame = () => {
    console.log("game draw")
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "yellow";
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})

const playGame = (userChoice) => {
    console.log("user Choice :",userChoice);
    // generate comp choice
    const compChoice = genCompChoice();
    console.log("Computer Choice :",compChoice);
    if (userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
           userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //scissor,rock
            userWin = compChoice === "scissor" ? false : true;
        }
        else if(userChoice === "scissor"){
            //paper,rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};

