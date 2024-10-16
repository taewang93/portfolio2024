const header = document.querySelector(".header");

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    header.classList.remove("on");
  } else {
    header.classList.add("on");
  }
});

// window.addEventListener("touchstart", (e) => {
//   console.log(e.touches[0].clientY);
// });
