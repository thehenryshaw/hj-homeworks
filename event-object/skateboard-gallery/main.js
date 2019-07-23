'use strct';

const img = document.getElementById('view');
const link = Array.from(document.getElementsByTagName('a'));

function choosePicture(event) {
  event.preventDefault();
  link.forEach(el => el.classList.remove('gallery-current'));
  event.currentTarget.classList.add('gallery-current');
  img.src = event.currentTarget.href;
}

link.forEach(link => link.addEventListener('click', choosePicture));
