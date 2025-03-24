// Get references to the header-menu container, button, and menu
var headerMenu = document.querySelector('.header-menu');
var btn = headerMenu.querySelector('button');
var menu = headerMenu.querySelector('nav ul');

// Toggle the menu on button click and update the active state
btn.addEventListener('click', function() {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    btn.style.borderRadius = '20px';
    btn.style.borderBottom = 'none';
    btn.classList.remove('active');
  } else {
    menu.style.display = 'block';
    btn.style.borderRadius = '0px';
    btn.classList.add('active');
  }
});

// Show the menu when hovering over the button and add active state
btn.addEventListener('mouseenter', function() {
  menu.style.display = 'block';
  btn.style.borderRadius = '0px';
  btn.classList.add('active');
});

// When the mouse leaves the combined area, hide the menu and reset styles
headerMenu.addEventListener('mouseleave', function() {
  menu.style.display = 'none';
  btn.style.borderRadius = '20px';
  btn.style.borderBottom = 'none';
  btn.classList.remove('active');
});
