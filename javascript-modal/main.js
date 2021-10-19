const $openBtn = document.querySelector('.openBtn');
const $noBtn = document.querySelector('.noBtn');
const $overlay = document.querySelector('.overlay');
const $modal = document.querySelector('.modal');

const onOff = () => {
  $modal.classList.toggle('active');
  $overlay.classList.toggle('active');
};

$openBtn.addEventListener('click', onOff);
$noBtn.addEventListener('click', onOff);
