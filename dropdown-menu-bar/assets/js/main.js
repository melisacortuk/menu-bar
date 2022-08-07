/*=============== SHOW MENU ===============*/
  const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById('header-toggle'),
  nav = document.getElementById('nav')

  if(toggle && nav) {
    toggle.addEventListener('click', () =>{
      nav.classList.toggle('show-menu')
      toggle.classList.toggle('ri-close-line')
    })
  }
}
showMenu('header-toggle','nav')
