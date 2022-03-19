/* Hamburger Menu */
const menuToggleButton = document.querySelector('.nav-menu-toggle-button')
const navMenu = document.querySelector('.nav-menu')
const menuToggleIcon = document.querySelector('.nav-menu-toggle-icon')
const navItems = document.querySelectorAll('.nav-item')

menuToggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show')
  menuToggleIcon.classList.toggle('rotate')
})


/* User Input & Display Results */
const userInput = document.getElementById('user-input');
const result = document.querySelector('.result');
const result2 = document.querySelector('.result2');

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (!userInput.value) {
      result.textContent = '';
      result2.textContent = '';
    } else {
      result.textContent = 'The validation result will be displayed here.';
      result2.textContent = `User input: ${userInput.value}`;
    }
  }
});
