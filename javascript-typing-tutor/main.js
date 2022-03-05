const $span = document.querySelectorAll('span');
const $congrats = document.querySelector('.congratsCont');
const $redoBtn = document.querySelector('.redoBtn');

let i = 0;
let errors = 0;

const typing = event => {
  const typed = event.key;
  const span = [...$span];

  if (span[i].innerHTML === typed && i === 0) {
    span[0].classList.add('correct');
    span[1].classList.add('currentL');
    span[0].classList.remove('currentL');
    span[0].classList.remove('wrong');
    i++;
  } else if (span[i].innerHTML === typed && i === (span.length - 1)) {
    span[i].classList.add('correct');
    span[i - 1].classList.add('correct');
    span[i].classList.remove('currentL');
    span[i].classList.remove('wrong');
    $congrats.innerText = `Congratulations you had ${(25 - errors) / 25 * 100}% typing accuracy`;
    $redoBtn.classList.remove('hidden');
  } else if (span[i].innerHTML === typed && i !== 0) {
    span[i].classList.add('correct');
    span[i - 1].classList.add('correct');
    span[i + 1].classList.add('currentL');
    span[i].classList.remove('currentL');
    span[i].classList.remove('wrong');
    i++;
  } else if (span[i].innerHTML !== typed) {
    span[i].classList.add('wrong');
    span[i].classList.add('currentL');
    errors++;
  }
};

const redo = event => {
  for (let j = 0; j < $span.length; j++) {
    if (j !== 0) {
      $span[j].className = '';
    } else if (j === 0) {
      $span[j].className = 'currenL';
    }
  }
  i = 0;
  errors = 0;
  $congrats.innerText = '';
  $redoBtn.classList.add('hidden');
};

document.addEventListener('keydown', typing);
$redoBtn.addEventListener('click', redo);
