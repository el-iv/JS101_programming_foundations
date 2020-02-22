//quick draft

let readline = require('readline-sync');

console.log('Enter the loan amount in $: ');
let loanAmount = readline.question();
loanAmount = Number(loanAmount);

console.log('Enter the annual interest rate, for example 0.10: ');
let annualInterestRate = readline.question();
annualInterestRate = Number(annualInterestRate);

console.log('Enter the loan duration: ');
let loanDurationMonths = readline.question();
loanDurationMonths = Number(loanDurationMonths);

let monthlyInterestRate = annualInterestRate / 12;
let monthlyPayment = loanAmount *
                  (monthlyInterestRate /
                  (1 - Math.pow(1 + monthlyInterestRate, -loanDurationMonths)));

console.log(`The monthly interest payment is: ${monthlyPayment.toFixed(2)}`);

console.log("     ");
