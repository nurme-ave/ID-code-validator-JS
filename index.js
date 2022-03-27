/* Hamburger Menu */
const navBarToggleButton = document.querySelector('.nav-bar-toggle-button');
const navMenu = document.querySelector('.nav-menu');
const navMenuItems = document.querySelectorAll('.nav-menu-item');

navBarToggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  navBarToggleButton.classList.toggle('rotate-lines');
});

/* Hide menu when clicked on the nav item */
function clickOnNavItem() {
  navMenu.classList.remove('show');
  navBarToggleButton.classList.remove('rotate-lines');
}
navMenuItems.forEach((item) => item.addEventListener('click', clickOnNavItem));

/* Validation - Grab elements and add event listeners */
const userInput = document.getElementById('user-input');
const displayResult = document.querySelector('.display-result');
const submitButton = document.querySelector('.submit-button');

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
});

userInput.addEventListener('click', () => {
  displayResult.textContent = '';
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (!userInput.value) {
    displayResult.textContent = 'Please insert your ID-code';
  } else {
    isOfCorrectLength(userInput.value);
  }
});

/* Validation - Validating part */
function isOfCorrectLength(idCode) {
  if (idCode.length === 11) {
    isValidIdCode(idCode);
  } else {
    displayResult.textContent = 'Please check the length of the ID-code';
  }
}

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
    displayResult.textContent += `${userInput.value} is valid`;
  } else {
    displayResult.textContent += `${userInput.value} is not valid`;
  }
  userInput.value = '';
}

function isOfCorrectGenderNumber(idCode) {
  const genderNumber = +idCode[0];
  const genderNumbers = [1, 2, 3, 4, 5, 6];
  return genderNumbers.includes(genderNumber);
}

function isValidYear(idCode) {
  const birthYear = +idCode.slice(1, 3);
  return 0 <= birthYear && birthYear <= 99;
}

function isValidMonth(idCode) {
  const birthMonth = +idCode.slice(3, 5);
  return 0 < birthMonth && birthMonth <= 12;
}

function isLeapYear(idCode) {
  /*
    In order to determine whether a year is leap year
    we need the full year with 4 digits (e.g 1970).
    If the first digit of the ID code is either 3 or 4,
    this means the person was born in the 19th century.
    If the first digit of the ID code is either 5 or 6,
    this means the person was born in the 20th century.
  */

  let fullYear;
  if (+idCode[0] === 3 || +idCode[0] === 4) {
    fullYear = `19${idCode.slice(1, 3)}`;
  } else if (+idCode[0] === 5 || +idCode[0] === 6) {
    fullYear = `20${idCode.slice(1, 3)}`;
  }

  return fullYear % 400 === 0 || (fullYear % 4 === 0 && fullYear % 100 != 0);
}

function isValidDate(idCode) {
  birthMonth = +idCode.slice(3, 5);
  const birthDate = +idCode.slice(5, 7);
  const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
  const monthsWith30Days = [4, 6, 9, 11];

  if (birthMonth === 2 && birthDate <= 28) {
    return true;
  } else if (birthMonth === 2 && isLeapYear(idCode) && birthDate === 29) {
    return true;
  } else if (monthsWith31Days.includes(birthMonth) && birthDate <= 31) {
    return true;
  } else if (monthsWith30Days.includes(birthMonth) && birthDate <= 30) {
    return true;
  }
  return false;
}

function isValidBornOrder(idCode) {
  const bornOrder = +idCode.slice(7, 10);
  return 0 <= bornOrder && bornOrder <= 999;
}

function isValidChecksum(idCode) {
  /* 
    Here's a link in Estonian how to check for the
    valid checksum:
    https://et.wikipedia.org/wiki/Isikukood#Kontrollnumber
  */

  let remainder, controlNum;
  const weightkArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
  const weightkArray2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
  const splitIdCode = idCode.slice(0, 10).split('');

  remainder = getRemainder(splitIdCode, weightkArray1);

  if (remainder >= 10) {
    remainder = getRemainder(splitIdCode, weightkArray2);
    controlNum = getRemainderSecondCheck(remainder);
  } else {
    controlNum = remainder;
  }
  return finalCheck(controlNum, idCode);
}

function getRemainder(code, weight) {
  let sum = 0;
  for (let i = 0; i < weight.length; i++) {
    sum += weight[i] * code[i];
  }

  return sum % 11;
}

function finalCheck(num, code) {
  return num === +code[10];
}

function getRemainderSecondCheck(rem) {
  if (rem >= 10) {
    rem = 0;
  }
  return rem;
}
