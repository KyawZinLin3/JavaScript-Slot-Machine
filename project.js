//deposit money
//determine number of lines to bet on
//collect bet amount
//Spin the slot machine
//check if the user won
//give the user their winnings
//play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

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

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

const transpose = (reels) => {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

const reels = spin();
console.log(reels);

let balance = deposit();
console.log("balance : " + balance);
// let balance = 0 + depositAmount;
const numberOfLines = getNumberOfLines();
console.log("your betting line : " + numberOfLines);
const numberBet = getBet(balance, numberOfLines);
const rows = transpose(reels);
console.log(rows);
