'use strict'

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    console.log(name);
    button.classList.toggle('open');
    button.innerHTML = button.classList.contains('open') ? `<span>&#8722;&ensp;</span> ${name} ` : '<span>&#43;</span>';
  });
});

document.addEventListener('click', event => {
  if (!event.target.classList.contains('button')) {
    buttons.forEach(button => {
      button.innerHTML = '<span>&#43;</span>';
      button.classList.remove('open');
    });
  }
});