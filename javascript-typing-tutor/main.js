const $span = document.querySelectorAll('span');

let i = 0;

const typing = event => {
  const typed = event.key;
  const span = [...$span];

  if (span[i].innerText === typed && i === 0) {
    span[i].classList.add('correct');
    span[i].classList.remove('currentL');
    span[i + 1].classList.add('currentL');
    i++;
  } else if (span[i].innerText === typed && i !== 0) {
    span[i].classList.add('correct');
    span[i + 1].classList.add('currentL');
    span[i].classList.remove('currentL');
    span[i - 1].classList.remove('wrong');
    i++;
  } else {
    span[i].classList.add = 'wrong';
  }
};

document.addEventListener('keydown', typing);
