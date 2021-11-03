const h1 = document.querySelector('h1');

let countdown = 4;

setInterval(() => {
  if (countdown === 0) {
    h1.innerText = '~Earth Beeeelooowww Us~';
  } else {
    h1.innerText = `${countdown--}`;
  }
}, 1000);
