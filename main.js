const body = document.querySelector('body'),
    navBar = document.querySelector('nav'),
    navItem = document.querySelector('.navlinks'),
    navLinks = document.querySelectorAll('.navlinks li'),
    burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navBar.classList.toggle('show');
})

// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 100) {
//     nav.classList.add("transparency", "shadow");
//   } else {
//     nav.classList.remove("transparency", "shadow");
//   }
// });
