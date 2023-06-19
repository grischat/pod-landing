"use strict";
// Попытка передвижения элементов
const windowSize = window.innerWidth;

document.addEventListener("DOMContentLoaded", function () {
  elementMoover(window.innerWidth);
  brForParagrapg(window.innerWidth);

  window.addEventListener("resize", function () {
    elementMoover(window.innerWidth);
    addDotsImg(window.innerWidth);
    removeDotsImg(window.innerWidth);
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
    }

    if (windowSize <= 767) {
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
      for (let i = 0; i < wordsList.length; i++) {
        if (wordsList[i] === "Casts") {
          wordsList[i] += "<br>";
        }
        paragraph.innerHTML = wordsList.join(" ");
      }
    }
  }
});

function removeDotsImg(windowSize) {
  const dotsImg = document.querySelector(".dotted__image-container");
  if (dotsImg && windowSize <= 767) {
    dotsImg.parentNode.removeChild(dotsImg);
  }
}
function addDotsImg(windowSize) {
  if (windowSize >= 768 && !dotsImgAdded) {
    // Проверяем, что размер окна достаточный и контейнер ещё не добавлен
    const dotsImgContainer = document.createElement("div");
    dotsImgContainer.classList.add("dotted__image-container");
    const dotsImg = document.createElement("img");
    dotsImg.id = "dots";
    dotsImg.src = "/assets/tablet/image-host.jpg";
    dotsImgContainer.appendChild(dotsImg);
    const parentNode = document.querySelector(".content__container");
    parentNode.appendChild(dotsImgContainer);
    dotsImgAdded = true; // Устанавливаем флаг, что контейнер добавлен
  }
}
