'use strict';

const pianoSet = document.getElementsByClassName('set')[0];
const key = Array.from(document.getElementsByTagName('li'));
const audio = Array.from(document.getElementsByTagName('audio'));

const sound = {
  lower: ['https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3', 'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3', 'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3', 'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3', 'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3'],
  
  middle: ['https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3', 'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3', 'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3', 'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3', 'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3'],

  higher: ['https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3', 'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3', 'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3', 'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3', 'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3']
}

function checkSet() {
  if (pianoSet.classList.contains('lower')) {
    return 'lower';
  }
  if (pianoSet.classList.contains('middle')) {
    return 'middle';
  }
  if (pianoSet.classList.contains('higher')) {
    return 'higher';
  }
}

function changeSet(event) {
  pianoSet.classList.remove('middle');
  switch(event.key) {
    case 'Shift':
      pianoSet.classList.remove('higher');
      pianoSet.classList.add('lower');
      break;
    case 'Alt':
      pianoSet.classList.remove('lower');
      pianoSet.classList.add('higher');
      break;
  }
}

document.addEventListener('keydown', changeSet);

function returnToDefault() {
  pianoSet.classList.remove('lower');
  pianoSet.classList.remove('higher');
  pianoSet.classList.add('middle');
}

key.forEach(el => el.addEventListener('click', () => {
  audio.forEach((el, i) => el.src = sound[checkSet()][i]);
  el.getElementsByTagName('audio')[0].currentTime = 0;
  el.getElementsByTagName('audio')[0].play();
}));

document.addEventListener('keyup', returnToDefault);
