//deposit money
//determine number of lines to bet on
//collect bet amount
//Spin the slot machine
//check if the user won
//give the user their winnings
//play again

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a Deposit Amount : ");
    const depositAmountNumber = parseFloat(depositAmount);

    if (isNaN(depositAmountNumber) || depositAmountNumber <= 0) {
      console.log("Invalid Deposit ,try again..");
    } else {
      return depositAmountNumber;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (0-3) : ");
    const numberOfLines = parseInt(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines , Try again..");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, line) => {
  while (true) {
    const bet = prompt("Enter your total Bet per Line : ");
    const numberBet = parseInt(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / line) {
      console.log("Invalid Bet amount , Try again..");
    } else {
      return numberBet;
    }
  }
};

let balance = deposit();
console.log("balance : " + balance);
// let balance = 0 + depositAmount;
const numberOfLines = getNumberOfLines();
console.log("your betting line : " + numberOfLines);
const numberBet = getBet(balance, numberOfLines);
