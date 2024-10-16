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

const onClickVisual = (target) => {
  window.scroll({
    behavior: "smooth",
    top: document.querySelector(`.${target}`).offsetTop - 80,
  });
};
