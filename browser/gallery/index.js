'use strict';

const currentImg = document.getElementById('currentPhoto');
const nextPhotoButton = document.getElementById('nextPhoto');
const prevPhotoButton = document.getElementById('prevPhoto');

let imgArray = ['https://netology-code.github.io/hj-homeworks/browser/gallery/i/breuer-building.jpg', 'https://netology-code.github.io/hj-homeworks/browser/gallery/i/guggenheim-museum.jpg', 'https://netology-code.github.io/hj-homeworks/browser/gallery/i/headquarters.jpg', 'https://netology-code.github.io/hj-homeworks/browser/gallery/i/IAC.jpg', 'https://netology-code.github.io/hj-homeworks/browser/gallery/i/new-museum.jpg'];

let i = 0;
currentImg.src = imgArray[i];

prevPhotoButton.onclick = function() {
  i > 0 ? i-- : i = imgArray.length-1;
  currentImg.src = imgArray[i];
}

nextPhotoButton.onclick = function() {
  i < imgArray.length-1 ? i ++ : i = 0;
  currentImg.src = imgArray[i];
}
