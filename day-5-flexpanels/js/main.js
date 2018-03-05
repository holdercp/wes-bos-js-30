const galleryPanels = document.querySelectorAll('.gallery__panel');

function toggleOpen() {
  this.classList.toggle('gallery__panel--open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('gallery__panel--active');
  }
}

galleryPanels.forEach(panel => panel.addEventListener('click', toggleOpen));
galleryPanels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
