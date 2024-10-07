for (let i = 0; i < 4; i++) {
  document.querySelectorAll(".visual_button_img")[i].classList.remove("set");
}

const mouseOverVisual = (target) => {
  document
    .querySelectorAll(".main_visual_button")
    [target].classList.remove("off");
  document.querySelectorAll(".main_visual_button")[target].classList.add("on");
};
const mouseOutVisual = (target) => {
  document
    .querySelectorAll(".main_visual_button")
    [target].classList.remove("on");
  document.querySelectorAll(".main_visual_button")[target].classList.add("off");
};
