document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".nav__mobile");
    const navLinks = document.querySelector(".nav__links");
    const navBtns = document.querySelector(".nav__btns");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navBtns.classList.toggle("active");
    });
  });
  