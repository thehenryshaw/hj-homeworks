'use strict';

const container = document.querySelector('.slider');
const buttons = Array.from(document.getElementsByTagName('a'));
const slides = document.querySelector('.slides');
const slide = Array.from(document.querySelectorAll('.slide'));

slide[0].classList.add('slide-current');

buttons[1].addEventListener('click', () => {
  const currentSlide = document.querySelector('.slide-current');
  currentSlide.classList.remove('slide-current');
  const nextSlide = currentSlide.nextElementSibling;
  nextSlide.classList.add('slide-current');
});

buttons[0].addEventListener('click', () => {
  const currentSlide = document.querySelector('.slide-current');
  currentSlide.classList.remove('slide-current');
  const prevSlide = currentSlide.previousElementSibling;
  prevSlide.classList.add('slide-current');
});

buttons[3].addEventListener('click', () => {
  slide.forEach(el => {
    const currentSlide = document.querySelector('.slide-current');
    currentSlide.classList.remove('slide-current');
    el.nextElementSibling;
    el.classList.add('slide-current');
  })
})

buttons[2].addEventListener('click', () => {
  slide.forEach(el => {
    const currentSlide = document.querySelector('.slide-current');
    currentSlide.classList.remove('slide-current');
    el.previousElementSibling;
    el.classList.add('slide-current');
  })
})
