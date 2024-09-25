const WH = window.innerHeight;

document.addEventListener("scroll", function () {
  const targetY = document.querySelector(".skill_section");
  const skillTitleWrap = document.querySelector(".section_title_wrap");
  const skillTitle = document.querySelector(".skills_title");
  let opacityValue = 1 - (window.scrollY - targetY.offsetTop - 100) / 250;
  let scaleValue = 1 - (window.scrollY - targetY.offsetTop - 100) / 1000;

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

  let pubOpaVal = (window.scrollY - targetY.offsetTop - WH) / 250;
  let pubTopVal = (1 - (window.scrollY - targetY.offsetTop - WH) / 250) * 100;

  if (
    window.scrollY >= targetY.offsetTop + WH &&
    window.scrollY < targetY.offsetTop + WH + WH
  ) {
    document.querySelector(".skill_image_publishing").classList.add("on");
    document.querySelector(".skill_image_publishing").classList.remove("off");
    document.querySelector(".skill_image_develop").classList.remove("on");

    document.querySelector(".skill_publishing").style.opacity = pubOpaVal;
    if (pubTopVal < 0) {
      document.querySelector(".skill_publishing").style.top = 0;
    } else {
      document.querySelector(".skill_publishing").style.top = pubTopVal + "%";
    }
  } else if (
    window.scrollY >= targetY.offsetTop + WH + WH &&
    window.scrollY < targetY.offsetTop + WH + WH + WH
  ) {
    document.querySelector(".skill_image_publishing").classList.add("off");
    document.querySelector(".skill_image_develop").classList.add("on");
    document.querySelector(".skill_image_develop").classList.remove("off");
    document.querySelector(".skill_image_design").classList.remove("on");
  } else if (window.scrollY >= targetY.offsetTop + WH + WH + WH) {
    document.querySelector(".skill_image_develop").classList.add("off");
    document.querySelector(".skill_image_design").classList.add("on");
  } else {
    document.querySelector(".skill_image_publishing").classList.remove("on");
  }
  // console.log(pubTopVal);
});
