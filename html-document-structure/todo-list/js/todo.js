'use strict';

const done = document.querySelector('.done');
const undone = document.querySelector('.undone');
const inputs = Array.from(document.querySelectorAll('input'));

function moveTaskInTheList() {
  inputs.forEach(el => {
    el.addEventListener('change', () => {
      if (el.checked) {
        done.appendChild(el.parentElement);
      }
      else if (!(el.checked)) {
        undone.appendChild(el.parentElement);
      }
  })})
}

document.addEventListener('DOMContentLoaded', moveTaskInTheList);
