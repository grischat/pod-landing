"use strict";
// Попытка передвижения элементов
const windowSize = window.innerWidth;
let dotsImgAdded = false;
document.addEventListener("DOMContentLoaded", function () {
  elementMoover(window.innerWidth);
  addDotsImg(window.innerWidth);
  brForParagrapg(window.innerWidth);

  window.addEventListener("resize", function () {
    elementMoover(window.innerWidth);
    removeDotsImg(window.innerWidth);
    addDotsImg(window.innerWidth);
    brForParagrapg(window.innerWidth);
  });

  // Elements places changin when the window size min width 768px
  function elementMoover(windowSize) {
    const icons = document.getElementById("icons-pod");
    const fields = document.getElementById("media-container");
    const parent = icons.parentNode;

    if (windowSize >= 768) {
      parent.insertBefore(icons, fields);
      changeImage(windowSize);
      addDotsImg(windowSize);
    } else {
      parent.insertBefore(fields, icons);
      removeDotsImg(windowSize);
    }
    function changeImage(windowSize) {
      const backgroundImg = document.querySelector(".mobile__background-image");
      if (windowSize >= 768) {
        backgroundImg.src = "/assets/tablet/image-host.jpg";
      }
    }
  }
  // Adding br tag to the Casts word when the window size min width 768px
  function brForParagrapg(windowSize) {
    if (windowSize >= 768) {
      const paragraph = document.querySelector(".text__pod");
      const wordsList = paragraph.innerHTML.split(" ");
      const updatedWordsList = wordsList.map((word) =>
        word === "Casts" ? word + "<br>" : word
      );
      paragraph.innerHTML = updatedWordsList.join(" ");
    }
  }
});

function removeDotsImg(windowSize) {
  const dotsImgContainer = document.querySelector(".dotted__image-container");
  if (dotsImgContainer && windowSize > 767) {
    dotsImgContainer.parentNode.removeChild(dotsImgContainer);
  }
}
function addDotsImg(windowSize) {
  const dotsImgContainer = document.querySelector(".dotted__image-container");
  if (windowSize >= 768 && !dotsImgContainer) {
    const dotsImgContainer = document.createElement("div");
    dotsImgContainer.classList.add("dotted__image-container");
    const dotsImg = document.createElement("img");
    dotsImg.id = "dots";
    dotsImg.src = "/assets/desktop/bg-pattern-dots.svg";
    dotsImgContainer.appendChild(dotsImg);
    const parentNode = document.querySelector(".content__container");
    parentNode.appendChild(dotsImgContainer);
    dotsImgAdded = true;
  } else if (windowSize < 768 && dotsImgContainer) {
    dotsImgContainer.parentNode.removeChild(dotsImgContainer);
    dotsImgAdded = false;
  }
}
