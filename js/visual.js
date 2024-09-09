setTimeout(() => {
  document.querySelectorAll(".visual_button_img")[0].classList.remove("set");
}, 1000);
setTimeout(() => {
  document.querySelectorAll(".visual_button_img")[1].classList.remove("set");
}, 1100);
setTimeout(() => {
  document.querySelectorAll(".visual_button_img")[2].classList.remove("set");
}, 1200);
setTimeout(() => {
  document.querySelectorAll(".visual_button_img")[3].classList.remove("set");
}, 1300);

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
