'use strict';

const slider = document.querySelectorAll('.slider');
let sliderIndex = 0;

const leftArrow = document.querySelectorAll('.left-arrow');
const rightArrow = document.querySelectorAll('.right-arrow');

leftArrow.forEach(element =>
  element.addEventListener('click', myArrow));

rightArrow.forEach(element =>
  element.addEventListener('click', myArrow));

function myArrow(e) {
  if (e.currentTarget.classList.contains('right-arrow') && sliderIndex < 2) {
    sliderIndex += 1;
    slider[sliderIndex].classList.remove('slide__anim--hide');
  } else if (e.currentTarget.classList.contains('left-arrow')
  && sliderIndex > 0) {
    slider[sliderIndex].classList.add('slide__anim--hide');
    sliderIndex -= 1;
  };
}
