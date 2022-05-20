import { isOfCorrectGenderNumber, isValidYear, isValidMonth, isValidDate, isValidBornOrder, isValidChecksum } from './validate.js';

/* Grab elements and add event listeners */
const formEl = document.querySelector('.form');
const userInput = document.getElementById('user-input');
const displayResult = document.querySelector('.display-result');
const submitButton = document.querySelector('.submit-button');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
});

userInput.addEventListener('click', () => {
  displayResult.textContent = '';
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (!userInput.value) {
    displayResult.textContent = 'Please enter your ID-code';
  } else {
    isOfCorrectLength(userInput.value);
  }
});

/* First validation */
function isOfCorrectLength(idCode) {
  if (idCode.length === 11) {
    isValidIdCode(idCode);
  } else {
    displayResult.textContent = 'Please check the length of the ID-code';
  }
}

/* Main validation */
function isValidIdCode(idCode) {
  const genderNumber = isOfCorrectGenderNumber(idCode);
  const validYear = isValidYear(idCode);
  const validMonth = isValidMonth(idCode);
  const validDate = isValidDate(idCode);
  const validBornOrder = isValidBornOrder(idCode);
  const validChecksum = isValidChecksum(idCode);

  if (
    genderNumber &&
    validYear &&
    validMonth &&
    validDate &&
    validBornOrder &&
    validChecksum
  ) {
    displayResult.textContent = `${userInput.value} is valid`;
  } else {
    displayResult.textContent = `${userInput.value} is not valid`;
  }
  userInput.value = '';
}
