function playSound(e) {
  let audio;
  let key;

  if (e.type === 'click') {
    const dataKey = this.dataset.key;
    audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    key = document.querySelector(`.key[data-key="${dataKey}"]`);
  } else if (e.type === 'keydown') {
    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  }

  if (audio) {
    audio.currentTime = 0;
    audio.play();
    key.classList.add('key--playing');
  }
}

function reverseTransform(e) {
  if (e.propertyName === 'transform') {
    this.classList.remove('key--playing');
  }
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('click', playSound);
  key.addEventListener('transitionend', reverseTransform);
});
window.addEventListener('keydown', playSound);
