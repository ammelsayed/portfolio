
/*---------------------------------------*\ 
    AUTHOR: A.M.M. Elsayed   
    * ALL RIGHTS RESERVED *
\*---------------------------------------*/

  // Get references to the header-menu container, button, and menu
  var headerMenu = document.querySelector('.header-menu');
  var btn = headerMenu.querySelector('button');
  var menu = headerMenu.querySelector('nav ul');

  // Toggle the menu on button click
  btn.addEventListener('click', function() {
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
      btn.style.borderRadius = '20px';
      btn.style.borderBottom = 'none';
    } else {
      menu.style.display = 'block';
      btn.style.borderRadius = '0px';
      btn.style.borderBottom = '1px solid white';
    }
  });

  // Show the menu when hovering over the button
  btn.addEventListener('mouseenter', function() {
    menu.style.display = 'block';
    btn.style.borderRadius = '0px';
    btn.style.borderBottom = '1px solid white';
  });

  // When the mouse leaves the combined area, hide the menu and reset button styles
  headerMenu.addEventListener('mouseleave', function() {
    menu.style.display = 'none';
    btn.style.borderRadius = '20px';
    btn.style.borderBottom = 'none';
  });