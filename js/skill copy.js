const WH = window.innerHeight;
const HWH = WH / 2;
const targetY = document.querySelector(".skill_section");
const skillTitleWrap = document.querySelector(".section_title_wrap");
const skillTitle = document.querySelector(".skills_title");

const pubPerBar = document.querySelectorAll(".pub_per_bar").length;
const devPerBar = document.querySelectorAll(".dev_per_bar").length;
const designPerBar = document.querySelectorAll(".design_per_bar").length;

document.addEventListener("scroll", function () {
  let opacityValue = 1 - (window.scrollY - targetY.offsetTop - 100) / 250;
  let scaleValue = 1 - (window.scrollY - targetY.offsetTop - 100) / 1000;

  if (
    window.scrollY > targetY.offsetTop &&
    window.scrollY < targetY.offsetTop + 3 * WH
  ) {
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
  let devOpaVal = (window.scrollY - targetY.offsetTop - WH - WH) / 250;
  let devTopVal =
    (1 - (window.scrollY - targetY.offsetTop - WH - WH) / 250) * 100;
  let designOpaVal = (window.scrollY - targetY.offsetTop - WH - WH - WH) / 200;
  let designTopVal =
    (1 - (window.scrollY - targetY.offsetTop - WH - WH - WH) / 250) * 100;

  if (
    window.scrollY >= targetY.offsetTop + WH &&
    window.scrollY < targetY.offsetTop + 3 * WH
  ) {
    document.querySelector(".skill_wrap").style.background = "#fafafa";

    document.querySelector(".skill_image_publishing").classList.add("on");
    document.querySelector(".skill_image_publishing").classList.remove("off");
    document.querySelector(".skill_image_develop").classList.remove("on");

    if (pubTopVal > -420 && pubTopVal < 0) {
      document.querySelector(".skill_publishing").style.top = 0;
      document.querySelector(".skill_info_pub").style.top = 0;
    } else if (pubTopVal >= 0) {
      document.querySelector(".skill_publishing").style.opacity = pubOpaVal;
      document.querySelector(".skill_publishing").style.top = pubTopVal + "%";
      document.querySelector(".skill_info_pub").style.opacity = pubOpaVal;
      document.querySelector(".skill_info_pub").style.top = pubTopVal + "%";
    } else {
      document.querySelector(".skill_info_pub").style.top =
        pubTopVal + 420 + "%";
      document.querySelector(".skill_info_pub").style.opacity = 6.1 - pubOpaVal;
    }

    document.querySelector(".skill_develop").style.opacity = 0;
  } else if (
    window.scrollY >= targetY.offsetTop + 3 * WH &&
    window.scrollY < targetY.offsetTop + 5 * WH
  ) {
    document.querySelector(".skill_image_publishing").classList.add("off");
    document.querySelector(".skill_image_develop").classList.add("on");
    document.querySelector(".skill_image_develop").classList.remove("off");
    document.querySelector(".skill_image_design").classList.remove("on");

    console.log(devTopVal);

    if (devTopVal < 15 && devTopVal > -115) {
      document.querySelector(".skill_develop").style.top = "100px";
      document.querySelector(".skill_info_dev").style.top = 0;
    } else if (devTopVal >= 15) {
      document.querySelector(".skill_develop").style.opacity = devOpaVal;
      document.querySelector(".skill_develop").style.top = devTopVal + "%";
      document.querySelector(".skill_info_dev").style.opacity = devOpaVal;
      document.querySelector(".skill_info_dev").style.top = devTopVal + "%";
    } else {
      document.querySelector(".skill_info_dev").style.top =
        devTopVal + 110 + "%";
      document.querySelector(".skill_info_dev").style.opacity = 2.8 - devOpaVal;
    }

    document.querySelector(".skill_design").style.opacity = 0;
  } else if (window.scrollY >= targetY.offsetTop + 5 * WH) {
    document.querySelector(".skill_image_develop").classList.add("off");
    document.querySelector(".skill_image_design").classList.add("on");

    if (designTopVal < 32 && designTopVal > -98) {
      document.querySelector(".skill_design").style.top = "200px";
      document.querySelector(".skill_info_design").style.top = 0;
    } else if (designTopVal >= 32) {
      document.querySelector(".skill_design").style.opacity = designOpaVal;
      document.querySelector(".skill_design").style.top = designTopVal + "%";
      document.querySelector(".skill_info_design").style.opacity = designOpaVal;
      document.querySelector(".skill_info_design").style.top =
        designTopVal + "%";
    } else {
      document.querySelector(".skill_info_design").style.top =
        designTopVal + 90 + "%";
      document.querySelector(".skill_info_design").style.opacity =
        2.8 - designOpaVal;
    }
  } else {
    document.querySelector(".skill_image_publishing").classList.remove("on");
  }

  if (window.scrollY >= targetY.offsetTop + WH) {
    for (let i = 0; i < pubPerBar; i++) {
      setTimeout(() => {
        document.querySelectorAll(".pub_per_bar")[i].style.width =
          document.querySelectorAll(".pub_per_bar")[i].dataset.per + "%";
      }, i * 200);
    }
  }
  if (window.scrollY >= targetY.offsetTop + WH + WH) {
    for (let i = 0; i < devPerBar; i++) {
      setTimeout(() => {
        document.querySelectorAll(".dev_per_bar")[i].style.width =
          document.querySelectorAll(".dev_per_bar")[i].dataset.per + "%";
      }, i * 200);
    }
  }
  if (window.scrollY >= targetY.offsetTop + WH + WH + WH) {
    for (let i = 0; i < designPerBar; i++) {
      setTimeout(() => {
        document.querySelectorAll(".design_per_bar")[i].style.width =
          document.querySelectorAll(".design_per_bar")[i].dataset.per + "%";
      }, i * 200);
    }
  }

  let pubSkillVal = (window.scrollY - (targetY.offsetTop + 3 * HWH)) / 300;
  let devSkillVal = (window.scrollY - (targetY.offsetTop + 5 * HWH)) / 300;
  let designSkillVal = (window.scrollY - (targetY.offsetTop + 7 * HWH)) / 300;

  if (window.scrollY >= targetY.offsetTop + 3 * HWH) {
    document.querySelector(".pub_skill_ul").style.opacity = 3.4 - pubSkillVal;
    if (pubSkillVal < 2.5) {
      document.querySelector(".pub_skill_ul").style.bottom = 0;
    } else {
      document.querySelector(".pub_skill_ul").style.bottom =
        10 * pubSkillVal + "px";
    }
    document.querySelector(".skill_list_box_pub").style.height =
      200 * (3.5 - pubSkillVal) + "px";
  }

  if (window.scrollY >= targetY.offsetTop + 5 * HWH) {
    document.querySelector(".dev_skill_ul").style.opacity = 0.9 - devSkillVal;
    if (devSkillVal < 0) {
      document.querySelector(".dev_skill_ul").style.bottom = 0;
    } else {
      document.querySelector(".dev_skill_ul").style.bottom =
        10 * devSkillVal + "px";
    }
    document.querySelector(".skill_list_box_dev").style.height =
      200 * (1 - devSkillVal) + "px";
  }
  if (window.scrollY >= targetY.offsetTop + 7 * HWH) {
    document.querySelector(".design_skill_ul").style.opacity =
      0.9 - designSkillVal;
    if (designSkillVal < 0) {
      document.querySelector(".design_skill_ul").style.bottom = 0;
    } else {
      document.querySelector(".design_skill_ul").style.bottom =
        10 * designSkillVal + "px";
    }
    document.querySelector(".skill_list_box_design").style.height =
      200 * (1 - designSkillVal) + "px";
  }
});

const badgeLength = document.querySelectorAll(".badge_li").length;

for (let i = 0; i < badgeLength; i++) {
  setTimeout(() => {
    document.querySelectorAll(".badge_li")[i].classList.add("on");
  }, 200 * i);
}
