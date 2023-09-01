'use strict'

const init = () => {
  const buttonContainer = document.querySelector('.button_container');
  const buttons = buttonContainer.querySelectorAll('.button');
  const image = document.querySelector('.image');

  const handle = e => {
    if (e.target.tagName === 'BUTTON') {
      const button = e.target;
      const name = button.dataset.name;
      button.classList.toggle('open');
      button.innerHTML = button.classList.contains('open')
        ? `<b>&#8722;</b>&ensp;${name}`
        : '';
    }
  }

  buttonContainer.addEventListener('click', handle);

  image.addEventListener('click', () => {
    buttons.forEach(button => {
      if (button.classList.contains('open')) {
        button.innerHTML = '';
        button.classList.remove('open');
      }
    });
    image.removeEventListener('click', () => { });
  });
}

window.addEventListener('load', init);