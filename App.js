let btns= document.querySelectorAll(".btn");
let reset= document.querySelector('#reset');
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const gameReset =()=>{
    turnO=true;
    enableBtns();
    msgContainer.classList.add("hide")

  }

  btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
          btn.innerText="O";
          btn.style.color="#EF3E36";
          turnO= false;
        }else{
          btn.innerText='X';
          btn.style.color="#17BEBB";
          turnO= true;
        }
        btn.disabled=true;

        checkWinner()
    });
  });

  const disableBtns=()=>{
    for(let btn of btns){
      btn.disabled= true;
    }
  }
  const enableBtns=()=>{
    for(let btn of btns){
      btn.disabled= false;
      btn.innerText=""
    }
  }

  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
   disableBtns();
  };

  const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = btns[pattern[0]].innerText;
      let pos2Val =  btns[pattern[1]].innerText;
      let pos3Val =  btns[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };

  newGameBtn.addEventListener("click", gameReset);
  reset.addEventListener("click", gameReset);