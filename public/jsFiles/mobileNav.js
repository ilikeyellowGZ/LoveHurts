const mobileNavView = document.getElementById("mobile-nav_view");

const openMenu = document.querySelector(".hamburger");
const closeMenu = document.getElementById("closingBtn");

const navLinks = document.querySelectorAll(
  ".bottom-links-and_downloads .links ul li a "
);

openMenu.addEventListener("click", () => {
  openMenu.classList.add("remove");
  closeMenu.classList.remove("remove");
  mobileNavView.classList.add("center");
  mobileNavView.classList.remove("remove");
});

closeMenu.addEventListener("click", () => {
  openMenu.classList.remove("remove");
  closeMenu.classList.add("remove");
  mobileNavView.classList.remove("center");
  mobileNavView.classList.add("remove");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    openMenu.classList.remove("remove");
    closeMenu.classList.add("remove");
    mobileNavView.classList.remove("center");
    mobileNavView.classList.add("remove");
  });
});
