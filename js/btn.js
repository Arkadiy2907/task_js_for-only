'use strict'

const buttonContainer = document.getElementById('buttonContainer');
const buttons = buttonContainer.querySelectorAll('.button');
const image = document.querySelector('.image');

const handle = e => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const name = button.dataset.name;
    button.classList.toggle('open');
    button.innerHTML = button.classList.contains('open') ? `<span>&#8722;&ensp;</span> ${name} ` : '<span>&#43;</span>';
  }
}

window.addEventListener('load', handle)

buttonContainer.addEventListener('click', handle);

image.addEventListener('click', () => {
  buttons.forEach(button => {
    button.innerHTML = '<span>&#43;</span>';
    button.classList.remove('open');
  });
  image.removeEventListener('click', () => { });
});