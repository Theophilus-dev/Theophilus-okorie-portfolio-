const menuBtn = document.querySelector(".navbar-menu");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");  // turns hamburger into X
  navLinks.classList.toggle("active"); // open/close nav menu
});

// Auto-close when clicking a link
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.classList.remove("active"); // reset X back to hamburger
  });
});
