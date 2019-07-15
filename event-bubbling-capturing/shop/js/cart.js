'use strict';

const itemsList = document.querySelector('.items-list');
const item = document.querySelector('.badge');

itemsList.addEventListener('click', event => {
  if (event.target.classList.contains('add-to-cart')) {
    item.textContent = ++item.textContent;
  }
})
