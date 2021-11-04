const h1 = document.querySelector('h1');

let countdown = 4;

const earth = setInterval(() => {
  if (countdown === 0) {
    h1.innerText = '~Earth Beeeelooowww Us~';
    clearInterval(earth);
  } else {
    h1.innerText = `${countdown--}`;
  }
}, 1000);
