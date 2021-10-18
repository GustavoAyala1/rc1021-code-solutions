const $hotBtn = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

let counter = 0;
const handleClicks = event => {
  counter++;
  $clickCount.textContent = `Clicks:${counter}`;
  if (counter === 4) {
    $hotBtn.classList.remove('cold');
    $hotBtn.classList.add('cool');
  } else if (counter === 7) {
    $hotBtn.classList.remove('cool');
    $hotBtn.classList.add('tepid');
  } else if (counter === 10) {
    $hotBtn.classList.remove('tepid');
    $hotBtn.classList.add('warm');
  } else if (counter === 13) {
    $hotBtn.classList.remove('warm');
    $hotBtn.classList.add('hot');
  } else if (counter === 16) {
    $hotBtn.classList.remove('hot');
    $hotBtn.classList.add('nuclear');
  }
};

$hotBtn.addEventListener('click', handleClicks);
