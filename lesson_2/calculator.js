const LANGUAGE = 'en'; // it's set to 'en' by default. It may be set to 'fr'
const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidLanguage(lang) {
  return lang !== 'fr' && lang !== 'en';
}

function isDivisionByZero(number2, operation) {
  return Number(number2) === 0 && operation === '4';
}

function messages(message, lang = LANGUAGE) {
  return MESSAGES[lang][message];
}

function validAnswers(lang) {
  let answers = [];
  if (lang === 'fr') {
    answers = ['o', 'O', 'n', 'N', 'oui', 'non'];
  } else {
    answers = ['y', 'Y', 'n', 'N', 'yes', 'no'];
  }
  return answers;
}

function validYeses(lang) {
  let yeses = [];
  if (lang === 'fr') {
    yeses = ['o', 'O', 'oui'];
  } else {
    yeses = ['y', 'Y', 'yes'];
  }
  return yeses;
}

prompt(messages('welcome'));

prompt(messages('selectLanguage'));
let lang = readline.question();

while (invalidLanguage(lang)) {
  prompt(messages('invalidLang'));
  lang = readline.question();
}

while (true) {
  prompt(messages('firstNumber',lang));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('notValidNumber',lang));
    number1 = readline.question();
  }

  prompt(messages('secondNumber', lang));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('notValidNumber', lang));
    number2 = readline.question();
  }

  prompt(messages('operation', lang));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('operationNumber', lang));
    operation = readline.question();
  }

  if (isDivisionByZero(number2, operation)) {
    prompt(messages('divisionByZero', lang));
  } else {
    let output;
    switch (operation) {
      case '1':
        output = Number(number1) + Number(number2);
        break;
      case '2':
        output = Number(number1) - Number(number2);
        break;
      case '3':
        output = Number(number1) * Number(number2);
        break;
      case '4':
        output = Number(number1) / Number(number2);
        break;
    }

  prompt(messages('result', lang) + output);
}

  prompt(messages('anotherCalculation', lang));
  let answer = readline.question();

  while (!validAnswers(lang).includes(answer)) {
    prompt(messages('anotherCalculationError', lang));
    answer = readline.question();
  }

  if (!validYeses(lang).includes(answer)) {
    prompt(messages('bye', lang));
    break;
  }
  console.clear();
}
