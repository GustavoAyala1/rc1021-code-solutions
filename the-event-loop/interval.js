let count = 4;
const blastOFf = setInterval(() => {
  if (count > 0) {
    count--;
    console.log(count);
  } else if (count === 0) {
    console.log('Blast off');
    clearInterval(blastOFf);
  }
}, 1000);
