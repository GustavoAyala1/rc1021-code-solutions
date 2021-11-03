const $container = document.querySelector('.container');
const $imgs = document.querySelectorAll('.images');
const $dots = document.querySelectorAll('.dots');

let counter = 0;
const handleImg = event => {
  const target = event.target;
  const dataView = target.getAttribute('data-view');
  const dataCarousel = target.getAttribute('data-carousel');

  if (dataView === 'right' && counter === $imgs.length - 1) {
    counter = 0;
    $imgs[counter].classList.remove('hidden');
    $imgs[$imgs.length - 1].classList.add('hidden');
    $dots[counter].classList.add('fas');
    $dots[counter].classList.remove('far');
    $dots[$imgs.length - 1].classList.remove('fas');
    $dots[$imgs.length - 1].classList.add('far');
  } else if (dataView === 'left' && counter === 0) {
    counter = $imgs.length - 1;
    $imgs[$imgs.length - 1].classList.remove('hidden');
    $imgs[0].classList.add('hidden');
    $dots[0].classList.remove('fas');
    $dots[0].classList.add('far');
    $dots[$imgs.length - 1].classList.add('fas');
    $dots[$imgs.length - 1].classList.remove('far');
  } else if (dataView === 'right') {
    counter++;
    $imgs[counter].classList.remove('hidden');
    $imgs[counter - 1].classList.add('hidden');
    $dots[counter].classList.add('fas');
    $dots[counter].classList.remove('far');
    $dots[counter - 1].classList.add('far');
    $dots[counter - 1].classList.remove('fas');
  } else if (dataView === 'left') {
    counter--;
    $imgs[counter].classList.remove('hidden');
    $imgs[counter + 1].classList.add('hidden');
    $dots[counter].classList.add('fas');
    $dots[counter].classList.remove('far');
    $dots[counter + 1].classList.add('far');
    $dots[counter + 1].classList.remove('fas');
  } else if (dataCarousel) {
    $imgs[counter].classList.add('hidden');
    $dots[counter].classList.remove('fas');
    $dots[counter].classList.add('far');
    counter = dataCarousel - 1;
    $imgs[counter].classList.remove('hidden');
    $dots[counter].classList.remove('far');
    $dots[counter].classList.add('fas');
  }
};

const interval = () => {
  if (counter === $imgs.length - 1) {
    counter = 0;
    $imgs[counter].classList.remove('hidden');
    $imgs[$imgs.length - 1].classList.add('hidden');
    $dots[counter].classList.add('fas');
    $dots[counter].classList.remove('far');
    $dots[$imgs.length - 1].classList.remove('fas');
    $dots[$imgs.length - 1].classList.add('far');
  } else {
    counter++;
    $imgs[counter].classList.remove('hidden');
    $imgs[counter - 1].classList.add('hidden');
    $dots[counter].classList.add('fas');
    $dots[counter].classList.remove('far');
    $dots[counter - 1].classList.add('far');
    $dots[counter - 1].classList.remove('fas');
  }
};

const timer = () => { setInterval(interval, 3000); };
timer();

$container.addEventListener('click', handleImg);
