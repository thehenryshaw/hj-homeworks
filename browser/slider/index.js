'use strict';

const slider = document.getElementById('slider');

let imageArray = ['https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png', 'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png', 'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png', 'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png', 'https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png']
;

let i = 0;
function changeImg() {
 if (i > 4) {
   i = 0;
 } else {
 slider.src = imageArray[i];
 }
 i++
}

setInterval(changeImg, 1000);
