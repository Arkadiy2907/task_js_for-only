'use strict'

const init = () => {
  const buttonContainer = document.querySelector('.button_container');
  const image = document.querySelector('.image');

  const handle = e => {
    if (e.target.tagName === 'BUTTON') {
      const button = e.target;
      button.classList.toggle('open');
    }
  }

  buttonContainer.addEventListener('click', handle);

  image.addEventListener('click', () => {
    const openButton = buttonContainer.querySelector('.button.open');
    if (openButton) {
      openButton.classList.remove('open');
    }
  });
}

window.addEventListener('load', init);