const WH = window.innerHeight;

document.addEventListener("scroll", function () {
  const targetY = document.querySelector(".skill_section");
  const skillTitleWrap = document.querySelector(".section_title_wrap");
  const skillTitle = document.querySelector(".skills_title");
  // let opacityValue = 1 + (targetY.offsetTop - window.scrollY) / 200;
  let opacityValue = 1 - (window.scrollY - targetY.offsetTop - 100) / 250;
  let scaleValue = 1 - (window.scrollY - targetY.offsetTop - 100) / 1000;
  // let scaleValue = 1 + (targetY.offsetTop - window.scrollY) / 600;

  // console.log(1 - (window.scrollY - targetY.offsetTop - 100) / 1000);

  if (window.scrollY > targetY.offsetTop) {
    document.querySelector(".skill_section").classList.add("fixed_title");
  } else {
    document.querySelector(".skill_section").classList.remove("fixed_title");
  }

  if (opacityValue > 1) {
    skillTitleWrap.style.opacity = 1;
    skillTitle.style.transform = "scale(1)";
  } else if (opacityValue < 0) {
    skillTitleWrap.style.opacity = 0;
  } else {
    skillTitleWrap.style.opacity = opacityValue;
    skillTitle.style.transform = `scale(${scaleValue})`;
  }

  if (
    window.scrollY >= targetY.offsetTop + WH &&
    window.scrollY < targetY.offsetTop + WH + WH
  ) {
    console.log("11");
    document.querySelector(".skill_image_publishing").classList.add("on");

    document.querySelector(".skill_image_publishing").classList.remove("off");
    document.querySelector(".skill_image_develop").classList.remove("on");
  } else if (
    window.scrollY >= targetY.offsetTop + WH + WH &&
    window.scrollY < targetY.offsetTop + WH + WH + WH
  ) {
    console.log("22");
    document.querySelector(".skill_image_publishing").classList.add("off");
    document.querySelector(".skill_image_develop").classList.add("on");

    document.querySelector(".skill_image_develop").classList.remove("off");
    document.querySelector(".skill_image_design").classList.remove("on");
  } else if (window.scrollY >= targetY.offsetTop + WH + WH + WH) {
    console.log("33");
    document.querySelector(".skill_image_develop").classList.add("off");
    document.querySelector(".skill_image_design").classList.add("on");
  } else {
    console.log("00");
    document.querySelector(".skill_image_publishing").classList.remove("on");
  }
  console.log(
    window.scrollY,
    targetY.offsetTop + WH,
    targetY.offsetTop + WH + WH
  );
});
