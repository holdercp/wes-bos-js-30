const hourHand = document.querySelector('.clock__hand--hour');
const minHand = document.querySelector('.clock__hand--min');
const secHand = document.querySelector('.clock__hand--sec');
const allHands = document.querySelectorAll('.clock__hand');

function rotateHands() {
  const now = new Date();

  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const hourDeg = ((hour / 12) * 360) + 90;
  const minDeg = ((min / 60) * 360) + 90;
  const secDeg = ((sec / 60) * 360) + 90; 

  // Fixes sudden jump when secDeg is 0 (90)
  if (secDeg === 90) {
    allHands.forEach(hand => hand.style.transition = 'none');
  } else {
    allHands.forEach(hand => hand.style.transition = '');
  }

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  secHand.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(rotateHands, 1000);
