const LANGUAGE = 'en'; // it's set to 'en' by default. It may be set to 'fr'
const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');
const FRENCH_VALID_ANSWERS = ['o', 'O', 'n', 'N', 'oui', 'non'];
const ENGLISH_VALID_ANSWERS = ['y', 'Y', 'n', 'N', 'yes', 'no'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidLanguage(lang) {
  return lang !== 'fr' && lang !== 'en';
}

function isValidOperation(operation) {
  return ['1', '2', '3', '4'].includes(operation);
}

function isDivisionByZero(number2, operation) {
  return Number(number2) === 0 && operation === '4';
}

function messages(message, lang = LANGUAGE) {
  return MESSAGES[lang][message];
}

function validAnswers(lang) {
  if (lang === 'fr') {
    return FRENCH_VALID_ANSWERS;
  } else {
    return ENGLISH_VALID_ANSWERS;
  }
}

function isNewCalculation(lang, answer) {
  if (lang === 'fr') {
    return ['o', 'O', 'oui'].includes(answer);
  } else {
    return ['y', 'Y', 'yes'].includes(answer);
  }
}

function result(number1, number2, operation) {
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
  return output;
}

prompt(messages('welcome'));

prompt(messages('selectLanguage'));
let lang = readline.question().toLowerCase();

while (invalidLanguage(lang)) {
  prompt(messages('invalidLang'));
  lang = readline.question().toLowerCase();
}

while (true) {
  prompt(messages('firstNumber',lang));
  let number1 = readline.question();

  while (isInvalidNumber(number1)) {
    prompt(messages('notValidNumber',lang));
    number1 = readline.question();
  }

  prompt(messages('secondNumber', lang));
  let number2 = readline.question();

  while (isInvalidNumber(number2)) {
    prompt(messages('notValidNumber', lang));
    number2 = readline.question();
  }

  prompt(messages('operation', lang));
  let operation = readline.question();

  while (!isValidOperation(operation)) {
    prompt(messages('operationNumber', lang));
    operation = readline.question();
  }

  if (!isDivisionByZero(number2, operation)) {

    let output = result(number1, number2, operation);
    prompt(messages('result', lang) + output);

  } else {
    prompt(messages('divisionByZero', lang));
  }

  prompt(messages('anotherCalculation', lang));
  let answer = readline.question();

  while (!validAnswers(lang).includes(answer)) {
    prompt(messages('anotherCalculationError', lang));
    answer = readline.question();
  }

  if (!isNewCalculation(lang, answer)) {
    prompt(messages('bye', lang));
    break;
  }
  console.clear();
}
