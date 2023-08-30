"use strict";

const button = document.getElementById("button__submit");

button.addEventListener("click", function () {
  event.preventDefault();
  const input = document.getElementById("input__email").value;
  const validationMessage = document.getElementById("validationMessage");
  function emailValidation() {
    //Check the email with a regExp
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regExp.test(input)
      ? window.location.reload()
      : (validationMessage.textContent = "Oops! Please check your email");
  }

  emailValidation();
});

// Array.prototype.myMap = function(callback) {
//   const result = [];
//   const thisArray = this;
//   for(let i = 0; i < thisArray.length; i++){
//     result.push(callback(thisArray[i], i, thisArray))
//   }
//   return result
// }

// const arr = [1,2,3,2,3,4,6,3423]

// console.log(arr.myMap((a,b) => a * 2))

// Array.prototype.myFilter = function(callback) {
//   const result = [];
//   const thisArray = this;
//   for(let i = 0; i < thisArray.length; i++) {
//     if(callback(thisArray[i], i, thisArray)) {
//       result.push(thisArray[i])
//     }
//   }
//   return result
// }

// console.log(arr.myFilter(x => x > 4))

// function filterList(l) {
//   // Return a new array with the strings filtered out
//   const result = []
//   for (let i = 0; i < l.length; i++) {
//     if (typeof l[i] !== 'string') {
//       // Действия, которые нужно выполнить для строковых элементов
//       result.push(l[i])
//     }
//   }
//   return result
// }

// remove duplicates

// function removeDuplicates(array) {
//   const result = [];
//   for(let i = 0; i < array.length; i++) {
//     const currentEl = array[i]
//     if(array.indexOf(currentEl) === array.lastIndexOf(currentEl)) {
//       result.push(currentEl)
//     }
//   }
//   return result
// }

// function removeDuplicates(array) {
//   const result = [];
//   array.forEach((el) => {
//     if (array.indexOf(el) === array.lastIndexOf(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// }

// console.log(removeDuplicates([1,2,2,3,4,4,5,6]))

// function removeUrlAnchor(url){
//   // TODO: complete

//   const indexOfSharp = url.indexOf('#')
//   if (indexOfSharp !== -1) {
//     return url.slice(0, indexOfSharp);
//   } else {
//     return url;
//   }

// }
// console.log(removeUrlAnchor('www.codewars.com#about'))

function upArray(arr) {
  // ...
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 1 || arr[i] > 9) {
      return null;
    }
  }
  const stringArray = arr.map(String);
  const number = parseInt(stringArray.join("")) + 1;
  const numberStr = number.toString();
  return [...numberStr].map(Number);
}

console.log(upArray([9, 9, -9]));
