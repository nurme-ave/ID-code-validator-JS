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

/* User Input */
const userInput = document.getElementById('user-input');
const displayResult = document.querySelector('.dp');
const submitButton = document.querySelector('.submit-button');


userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
});

userInput.addEventListener('click', () => {
  displayResult.textContent = '';
})

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (!userInput.value) {
      displayResult.textContent = 'TEST 1...Please insert your ID-code';
    } else {
      isValidIdCode(userInput.value);
    }
});



/* Validate & Display Results */
function isValidIdCode(idCode) {

  if (!isOfCorrectLength(idCode)) {
    displayResult.textContent = 'TEST 2...Please check the length of the ID-code';
  } else {
    validate(idCode);
  }
}

function validate(idCode) {
    // const length = isOfCorrectLength(idCode);
    const genderNumber = isOfCorrectGenderNumber(idCode);
    const validYear = isValidYear(idCode);
    const validMonthNumber = isValidMonthNumber(idCode);
    const validDate = isValidDate(idCode);
    const validBornOrder = isValidBornOrder(idCode);
    const validChecksum = isValidChecksum(idCode);
    
    
    // console.log(length);
    console.log(genderNumber);
    console.log(validYear);
    console.log(validMonthNumber);
    console.log(validDate);
    console.log(validBornOrder);
    console.log(validChecksum);
  
    // console.log(convertToFullYear(idCode));
    // console.log(isLeapYear(idCode));
  
    if (
      // length &&
      genderNumber &&
      validYear &&
      validMonthNumber &&
      validDate &&
      validBornOrder &&
      validChecksum
    ) {
      console.log('All Good');
      displayResult.textContent += `${userInput.value} is valid`;
    } else {
      console.log('Somethings not quite right');
      displayResult.textContent += `${userInput.value} is not valid`;
    }
    userInput.value = '';
}

function isOfCorrectLength(idCode) {
  console.log(idCode.length === 11)
  return idCode.length === 11;
}

function isOfCorrectGenderNumber(idCode) {
  const genderNumbers = [1, 2, 3, 4, 5, 6];
  return genderNumbers.includes(+idCode[0]);
}

function isValidYear(idCode) {
  return 0 <= +idCode.slice(1, 3) && +idCode.slice(1, 3) <= 99;
}

function isValidMonthNumber(idCode) {
  return 0 < +idCode.slice(3, 5) && +idCode.slice(3, 5) <= 12;
}

// function convertToFullYear(idCode) {
//   let fullYear;
//   if (+idCode[0] === 3 || +idCode[0] === 4) {
//     fullYear = `19${idCode.slice(1, 3)}`;
//   } else if (+idCode[0] === 5 || +idCode[0] === 6) {
//     fullYear = `20${idCode.slice(1, 3)}`;
//   }
//   return +fullYear;
// }

function isLeapYear(idCode) {
  let fullYear;

  if (+idCode[0] === 3 || +idCode[0] === 4) {
    fullYear = `19${idCode.slice(1, 3)}`;
  } else if (+idCode[0] === 5 || +idCode[0] === 6) {
    fullYear = `20${idCode.slice(1, 3)}`;
  }

  return fullYear % 400 == 0 || (fullYear % 4 == 0 && fullYear % 100 != 0);
}

function isValidDate(idCode) {
  const monthNumber = +idCode.slice(3, 5);
  const date = +idCode.slice(5, 7);
  const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
  const monthsWith30Days = [4, 6, 9, 11];

  if (monthNumber === 2 && date <= 28) {
    return true;
  } else if (monthNumber === 2 && isLeapYear(idCode) && date === 29) {
    return true;
  } else if (monthsWith31Days.includes(monthNumber) && date <= 31) {
    return true;
  } else if (monthsWith30Days.includes(monthNumber) && date <= 30) {
    return true;
  }
  return false;
}

function isValidBornOrder(idCode) {
  return 0 <= +idCode.slice(7, 10) && +idCode.slice(7, 10) <= 999;
}

function isValidChecksum(idCode) {
  let remainder, secondChRem, controlNum;
  const weightkArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
  const weightkArray2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
  const splitIdCode = idCode.slice(0, 10).split('');

  remainder = mainCheck(splitIdCode, weightkArray1);

  if (remainder >= 10) {
    remainder = mainCheck(splitIdCode, weightkArray2);
    secondChRem = secondCheck(remainder);
    return finalCheck(secondChRem, idCode);
  } else {
    controlNum = remainder;
    return finalCheck(controlNum, idCode);
  }
}

function mainCheck(code, weight) {
  let sum = 0;
  for (let i = 0; i < weight.length; i++) {
    sum += weight[i] * code[i];
  }
  return sum % 11;
}

function finalCheck(cNum, code) {
  return cNum === +code[10];
}

function secondCheck(rem) {
  if (rem >= 10) {
    rem = 0;
    return rem;
  } else {
    return rem;
  }
}
