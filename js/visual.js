for (let i = 0; i < 4; i++) {
  document.querySelectorAll(".visual_button_img")[i].classList.remove("set");
}

const mouseOverVisual = (target) => {
  document
    .querySelectorAll(".main_visual_button")
    [target].classList.remove("off");
  document.querySelectorAll(".main_visual_button")[target].classList.add("on");
  document.querySelectorAll(".menu_link")[target].classList.add("hover");
};
const mouseOutVisual = (target) => {
  document
    .querySelectorAll(".main_visual_button")
    [target].classList.remove("on");
  document.querySelectorAll(".main_visual_button")[target].classList.add("off");
  document.querySelectorAll(".menu_link")[target].classList.remove("hover");
};

// const header = document.querySelector(".header");

const onClickVisual = (target) => {
  window.scroll({
    behavior: "smooth",
    top: document.querySelector(`.${target}`).offsetTop - 80,
  });
  // console.log(window.scrollY, document.querySelector(`.${target}`).offsetTop);
  // if (window.scrollY + 80 >= document.querySelector(`.${target}`).offsetTop) {
  //   header.classList.add("on");
  // } else {
  //   header.classList.remove("on");
  // }
};
