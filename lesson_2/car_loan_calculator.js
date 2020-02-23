const readline = require('readline-sync');
const MESSAGES = require('./car_loan_calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function messages(message) {
  return MESSAGES[message];
}

function isInvalidAmount(amount) {
  return (Number.isNaN(Number(amount)) || (Number(amount) <= 0));
}

function isInvalidInterestRate(rate) {
  return (Number.isNaN(Number(rate)) ||  Number(rate) < 0);
}

function isInvalidDuration(months) {
  return (Number.isNaN(Number(months)) ||
          !Number.isInteger(Number(months)) ||
          Number(months) <= 0);
}

function calculateMonthlyPayment(loanAmount, monthlyRate, durationMonths) {
  if (monthlyRate === 0) {
    return loanAmount / durationMonths;
  }

  return loanAmount *
        (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-durationMonths))));
}

function isValidAnswer(answer) {
  return ['y', 'n', 'yes', 'no'].includes(answer.toLowerCase());
}

function isNewCalculation(answer) {
  return ['y', 'yes'].includes(answer.toLowerCase());
}

prompt(messages('welcome'));

while (true) {
  prompt(messages('askForLoanAmount'));
  let loanAmount = readline.question();

  while (isInvalidAmount(loanAmount)) {
    prompt(messages('invalidLoanAmount'));
    prompt(messages('askForLoanAmount'));
    loanAmount = readline.question();
  }

  prompt(messages('askForAnnualInterestRate'));
  let annualInterestRate = readline.question();

  while (isInvalidInterestRate(annualInterestRate)) {
    prompt(messages('invalidRate'));
    prompt(messages('askForAnnualInterestRate'));
    annualInterestRate = readline.question();
  }

  prompt(messages('askForLoanDuration'));
  let loanDurationMonths = readline.question();

  while (isInvalidDuration(loanDurationMonths)) {
    prompt(messages('invalidDuration'));
    prompt(messages('askForLoanDuration'));
    loanDurationMonths = readline.question();
  }

  loanAmount = Number(loanAmount);
  let monthlyInterestRate = Number(annualInterestRate) / 12;
  loanDurationMonths = Number(loanDurationMonths);

  let monthlyPayment = calculateMonthlyPayment(loanAmount, monthlyInterestRate,
                                                        loanDurationMonths);

  prompt(messages('monthlyPayment') + monthlyPayment.toFixed(2));

  prompt(messages('anotherCalculation'));
  let answer = readline.question();

  while (!isValidAnswer(answer)) {
    prompt(messages('anotherCalculationError'));
    answer = readline.question();
  }

  if (!isNewCalculation(answer)) {
    prompt(messages('bye'));
    break;
  }

  console.clear();
}
