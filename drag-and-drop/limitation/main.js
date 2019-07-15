'use strict';

const eyes = document.querySelector('.block');
const textarea = document.querySelector('.textarea');
const message = document.querySelector('.message');

textarea.addEventListener('focus', event => {
  event ? eyes.classList.add('active') : '';
})

textarea.addEventListener('blur', event => {
  event ? eyes.classList.remove('active') : '';
})

function debounce(callback, delay) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      callback();
    }, delay);
  };
};

  textarea.addEventListener('keydown', debounce(() => {
    message.classList.add('view');
    eyes.classList.remove('active');
}, 2000));

textarea.addEventListener('keydown', event => {
  if (textarea.value) {
    eyes.classList.add('active');
    message.classList.remove('view');
  }
})
