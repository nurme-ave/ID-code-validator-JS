/* Hamburger Menu */
const menuToggleButton = document.querySelector('.nav-menu-toggle-button')
const navMenu = document.querySelector('.nav-menu')
const navItems = document.querySelectorAll('.nav-menu-item')

menuToggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show')
  menuToggleButton.classList.toggle('rotate')
})

/* Hide menu when clicked on the nav item */
function clickOnNavItem() {
  navMenu.classList.remove('show')
  menuToggleButton.classList.toggle('rotate')
}
navItems.forEach((item) => item.addEventListener('click', clickOnNavItem))


/* User Input & Display Results */
// const userInput = document.getElementById('user-input');
// const displayResult = document.querySelector('.display-result');

// userInput.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     if (!userInput.value) {
//       displayResult.textContent = '';
//     } else {
//       displayResult.textContent = 'Your ID-code is valid.';
//     }
//   }
// });
