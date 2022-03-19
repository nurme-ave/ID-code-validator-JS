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
    } else {
      result.textContent = 'Your ID-code is valid.';
    }
  }
});
