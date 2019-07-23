'use strict';

const navigation = document.getElementsByTagName('nav')[0];
const secret = document.getElementsByClassName('secret')[0];

function openMenu(event) {
  if (!(event.ctrlKey && event.altKey)) {
    return;
  }
  if(event.code === 'KeyT') {
    navigation.classList.toggle('visible');
  }
}

document.addEventListener('keydown', openMenu);

let secretCode = [];
const password = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];

function showSecretCode(event) {
  if(event.code === 'KeyY') {
    secretCode = [];
  }
  secretCode.push(event.code);
  if(password.join() === secretCode.join()) {
    secret.classList.add('visible');
  }
}

document.addEventListener('keydown', showSecretCode);
