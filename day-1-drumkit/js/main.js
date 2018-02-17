function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    key.classList.add('key--playing');
  }
}

function removeClass(e) {
  if (e.propertyName === 'transform') {
    this.classList.remove('key--playing');
  }
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeClass));
window.addEventListener('keydown', playSound);
