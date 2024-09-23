window.addEventListener("wheel", (e) => {
  const header = document.querySelector(".header");

  if (e.deltaY > 0) {
    header.classList.remove("on");
  } else {
    header.classList.add("on");
  }
});
