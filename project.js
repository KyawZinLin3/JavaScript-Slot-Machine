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

const depositAmount = deposit();
console.log("balance : " + depositAmount);
