// SHOW HEADER MENU
const showMenu = (menuId, toggleId) => {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
};
showMenu("nav-menu", "nav-toggle");

// REMOVE HEADER MENU WHEN WE CLICK NAV-LINK
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));

// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*= ${sectionId} ]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`.nav__menu a[href*= ${sectionId} ]`)
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// CHANGE BACKGROUND HEADER WHEN SCROLL
function scrollHeader() {
  const header = document.getElementById("header");

  this.scrollY >= 200
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL TOP
function scrollTop() {
  const scrollTop = document.getElementById("scrolltop");

  this.scrollY >= 500
    ? scrollTop.classList.add("show-scroll")
    : scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

// DARK / LIGHT MODE
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-toggle-right";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? "bx-toggle-left"
    : "bx-toggle-right";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-toggle-left" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: "2000",
  reset: true,
});

// home section animation
sr.reveal(".home__title");
sr.reveal(".home__text", { delay: 200 });
sr.reveal(".home__button", { delay: 400 });
sr.reveal(".home__img", { delay: 600 });

// section class animation
sr.reveal(".section-title-center");
sr.reveal(".section-title");

// share section animation
sr.reveal(".share__img", { delay: 200 });
sr.reveal(".share__text", { delay: 400 });
sr.reveal(".share__button", { delay: 600 });

// decoration section animation
sr.reveal(".decoration__data", { delay: 200, interval: 200 });

// accessory section animation
sr.reveal(".accessory__content", { delay: 200, interval: 200 });

// send section animation
sr.reveal(".send__text", { delay: 200 });
sr.reveal(".send__direction", { delay: 400 });
sr.reveal(".send__img", { delay: 600 });
