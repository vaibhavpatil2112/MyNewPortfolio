//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 850);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

// Work section toggle

$(document).ready(function () {
  $(".controls .buttons").click(function () {
    $(this).addClass("button-active").siblings().removeClass("button-active");

    let filter = $(this).attr("data-filter");
    if (filter == "all") {
      $(".work .image").show(400);
    } else {
      $(".work .image")
        .not("." + filter)
        .hide(200);
      $(".work .image")
        .filter("." + filter)
        .show(400);
    }
  });

  $(".navigation a").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// Background animation

const Bganimation = document.querySelector(".bgAnimation");

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
  const colorBox = document.createElement("div");

  colorBox.classList.add("colorBox");
  Bganimation.append(colorBox);
}

// mode

const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

themeToggle.addEventListener("click", function () {
  let theme = document.documentElement.getAttribute("data-theme");

  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    document.body.style.background = "#ffe9e9";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    document.body.style.background = "black";
  }
});
