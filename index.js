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

/* User Input & Display Results */
const userInput = document.getElementById('user-input');
const displayResult = document.querySelector('.display-result');

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (!userInput.value) {
      displayResult.textContent = '';
    } else {
      displayResult.textContent = '>>> Validation result here <<<';
    }
  }
});
