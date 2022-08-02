const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.menu-navbar')

menu.addEventListener('click', function () {
  console.log('Here')
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})
