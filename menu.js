document.addEventListener("DOMContentLoaded", function() {
  // Get references to the header element, header-menu container, the button, and the nested menu
  var header = document.querySelector('header');
  var headerMenu = document.querySelector('.header-menu');
  var btn = headerMenu.querySelector('.menu-button button');
  var menu = headerMenu.querySelector('.menu-button .menu-navigations');

  // Set a smooth transition for header background changes
  header.style.transition = 'background-color 0.5s ease';

  // Helper to update header background
  function setHeaderBackground(color) {
    header.style.backgroundColor = color;
  }

  // Toggle the menu on button click, update active state, and header background
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (menu.classList.contains('visible')) {
      menu.classList.remove('visible');
      btn.style.borderRadius = '20px';
      btn.classList.remove('active');
      setHeaderBackground('#101010'); // Reset header background
    } else {
      menu.classList.add('visible');
      btn.style.borderRadius = '40px';
      btn.classList.add('active');
      setHeaderBackground('#202020'); // Match button's background
    }
  });

  // When mouse hovers over the button, show the menu and update header background
  btn.addEventListener('mouseenter', function() {
    menu.classList.add('visible');
    btn.style.borderRadius = '40px';
    btn.classList.add('active');
    setHeaderBackground('#202020');
  });

  // When mouse leaves the header-menu area, hide the menu, reset styles, and header background
  headerMenu.addEventListener('mouseleave', function() {
    menu.classList.remove('visible');
    btn.style.borderRadius = '20px';
    btn.classList.remove('active');
    setHeaderBackground('#101010');
  });
});
