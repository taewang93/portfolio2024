const projectY = document.querySelector(".project_section");

document.addEventListener("scroll", function () {
  if (window.scrollY > projectY.offsetTop - 400) {
    document.querySelector(".project_text").style.opacity = 1;
  } else {
    document.querySelector(".project_text").style.opacity = 0;
  }
});
