/* Update the year in the footer dynamically */
const footer = document.querySelector('footer')

function updateYear() {
  const currentYear = new Date().getFullYear()
  const yearElement = footer.querySelector('#currentYear')
  yearElement.textContent = currentYear
}

updateYear()

/* Hamburger Menu */
const navBarToggleButton = document.getElementById('nav-bar-toggle-button');
const navMenu = document.getElementById('nav-menu');
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