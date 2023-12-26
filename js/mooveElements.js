"use strict";



const windowSize = window.innerWidth;
let dotsImgAdded = false;
import imageMobile from './assets/mobile/image-host.jpg';
import imageTablet from './assets/tablet/image-host.jpg';
import imageDesk from './assets/desktop/image-host.jpg';

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
      changeImage(windowSize);
      removeDotsImg(windowSize);
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

  function changeImage(windowSize) {
    const backgroundImg = document.querySelector(".mobile__background-image");
    if (windowSize < 768) {
      backgroundImg.src = imageMobile;
    } else if (windowSize >= 768 && windowSize < 1440) {
      backgroundImg.src = imageTablet;
    } else {
      backgroundImg.src = imageDesk;
    }
  }
});

function removeDotsImg(windowSize) {
  const dotsImgContainer = document.querySelector(".dotted__image-container");
  if (dotsImgContainer && windowSize <= 767) {
    dotsImgContainer.parentNode.removeChild(dotsImgContainer);
    dotsImgAdded = false;
  }
}

function addDotsImg(windowSize) {
  const dotsImgContainer = document.querySelector(".dotted__image-container");

  if (windowSize >= 768 && !dotsImgContainer) {
    const dotsImgContainer = document.createElement("div");
    dotsImgContainer.classList.add("dotted__image-container");

    const dotsImg = document.createElement("img");
    dotsImg.id = "dots";
    dotsImg.src = `${basePath}/assets/desktop/bg-pattern-dots.svg`;

    dotsImgContainer.appendChild(dotsImg);

    const parentNode = document.querySelector("body");
    parentNode.appendChild(dotsImgContainer);

    dotsImgAdded = true;
  }
}
