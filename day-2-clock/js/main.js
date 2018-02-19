const hourHand = document.querySelector('.clock__hand--hour');
const minHand = document.querySelector('.clock__hand--min');
const secHand = document.querySelector('.clock__hand--sec');

function rotateHands() {
  const now = new Date();

  const hour = now.getHours();
  const hourDeg = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  const min = now.getMinutes();
  const minDeg = ((min / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  const sec = now.getSeconds();
  const secDeg = ((sec / 60) * 360) + 90;
  secHand.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(rotateHands, 1000);
