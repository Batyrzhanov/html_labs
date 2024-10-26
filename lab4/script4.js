
let rollCount = 0;


function rollDice() {
  
  const dice1Value = Math.floor(Math.random() * 6) + 1;
  const dice2Value = Math.floor(Math.random() * 6) + 1;

  
  document.getElementById("dice1").src = `images/dice${dice1Value}.png`;
  document.getElementById("dice2").src = `images/dice${dice2Value}.png`;

  
  const sum = dice1Value + dice2Value;
  document.getElementById("result").textContent = `You rolled a ${sum}`;

  
  rollCount++;
  document.getElementById("rollCount").textContent = `Roll Count: ${rollCount}`;

  
  if (dice1Value === dice2Value) {
    document.getElementById("result").textContent += " - Doubles! 🎉";
  }
}


document.getElementById("rollButton").addEventListener("click", rollDice);
