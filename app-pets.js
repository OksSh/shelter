let burger = document.querySelector('.burger');
let nav = document.querySelector('.navbar__nav');
let body = document.body;

burger.addEventListener('click', function () {
  burger.classList.toggle('burger_move');
  nav.classList.toggle('navbar__nav_visible');

  if (nav.classList.contains('navbar__nav_visible')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'visible';
  }
});
