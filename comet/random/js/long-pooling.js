'use strict';

const nodeListLongPooling = document.querySelector('.long-pooling').children;
const arrLongPooling = Array.from(nodeListLongPooling);

function longPollingRequest() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState != 4) return;

    if (this.status == 200 || this.status == 202) {
      if (this.responseText) {
        showPolling(this.responseText);
      }
      longPollingRequest();
      return;
    }

    if (this.status != 502) {
      console.log(this.statusText);
    }
    setTimeout(longPollingRequest, 1000);
  }

  xhr.open('GET', 'https://neto-api.herokuapp.com/comet/long-pooling', true);
  xhr.send();
}

longPollingRequest();

function showPolling(data) {
  const number = data.split(' ').join('');
  arrLongPooling.forEach(el => el.textContent === number ? el.classList.add('flip-it') : el.classList.remove('flip-it'));
}
