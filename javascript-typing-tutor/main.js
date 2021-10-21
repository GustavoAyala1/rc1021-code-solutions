const $span = document.querySelectorAll('span');

let i = 0;

const typing = event => {
  const typed = event.key;
  const span = [...$span];

  if (span[i].innerHTML === typed && i === 0) {
    span[0].classList.add('correct');
    span[1].classList.add('currentL');
    span[0].classList.remove('currentL');
    span[0].classList.remove('wrong');
    i++;
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
  }
};

document.addEventListener('keydown', typing);
