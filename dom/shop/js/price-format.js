function getPriceFormatted(value) {
  return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

const buttons = Array.from(document.getElementsByTagName('button'));
const counter = document.getElementById('cart-count');
const summ = document.getElementById('cart-total-price');

let i = 0;
let p = 0;

function addToCart(event) {
  counter.innerHTML = ++i;
  let price = event.currentTarget.dataset.price;
  p = +price + p; 
  summ.innerHTML = getPriceFormatted(p);
}

buttons
.forEach(el => el.addEventListener('click', addToCart));
