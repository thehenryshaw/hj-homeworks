'use strict';

const nodeListpooling = document.querySelector('.pooling').children;
const arrPooling = Array.from(nodeListpooling);

setInterval(function() {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    let res = xhr.responseText;
    arrPooling.forEach(el => el.textContent === res ? el.classList.add('flip-it') : el.classList.remove('flip-it'));
  });
  xhr.addEventListener('error', err => console.error(err));
  xhr.open('GET', 'https://neto-api.herokuapp.com/comet/pooling', true);
  xhr.send();
}, 5000);
