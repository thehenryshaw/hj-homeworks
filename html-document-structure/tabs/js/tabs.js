'use strict';

const container = document.getElementById('tabs');
const tabs = document.querySelector('.tabs-nav');
const firstLi = document.getElementsByTagName('li')[0];
const liCopy = document.getElementsByTagName('li')[0].cloneNode(true);
const liCopy2 = document.getElementsByTagName('li')[0].cloneNode(true);
const allContent = document.querySelector('.tabs-content');
const articles = Array.from(document.getElementsByTagName('article'));

tabs.appendChild(liCopy);
tabs.appendChild(liCopy2);

let shoppingTab = firstLi.firstChild;
let foodTab = liCopy.firstChild;
foodTab.textContent = 'Еда';
let clubTab = liCopy2.firstChild;
clubTab.textContent = 'Клубы';

function clickOnTabs() {
articles.find(el => el.dataset.tabTitle === 'Шопинг' ? el.classList.add('ui-tabs-active') : false);
articles.find(el => el.dataset.tabTitle === 'Еда' ? el.classList.add('hidden') : false);
articles.find(el => el.dataset.tabTitle === 'Клубы' ? el.classList.add('hidden') : false);
  articles.find(el => {
    if (el.dataset.tabTitle === 'Шопинг') {
      firstLi.addEventListener('click', event => {
        event.preventDefault();
        articles[1].classList.add('hidden');
        articles[2].classList.add('hidden');
        el.classList.remove('hidden');
        el.classList.add('ui-tabs-active');
      })
    }
  })
  articles.find(el => {
    if (el.dataset.tabTitle === 'Еда') {
      foodTab.addEventListener('click', event => {
        event.preventDefault();
        articles[0].classList.add('hidden');
        articles[2].classList.add('hidden');
        el.classList.remove('hidden');
        el.classList.add('ui-tabs-active');
      })
    }
  })
  articles.find(el => {
    if (el.dataset.tabTitle === 'Клубы') {
      clubTab.addEventListener('click', event => {
        event.preventDefault();
        articles[0].classList.add('hidden');
        articles[1].classList.add('hidden');
        el.classList.remove('hidden');
        el.classList.add('ui-tabs-active');
      })
    }
  })
}

document.addEventListener('DOMContentLoaded', clickOnTabs);
