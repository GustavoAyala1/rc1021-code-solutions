const $container = document.querySelector('.container');
const $bulb = document.querySelector('.bulb');

const onOff = () => {
  $bulb.classList.toggle('active');
  $container.classList.toggle('containerAct');
};

$bulb.addEventListener('click', onOff);
