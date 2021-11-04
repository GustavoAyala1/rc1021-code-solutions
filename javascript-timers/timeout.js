const h1 = document.querySelector('h1');
const hello = () => {
  h1.innerText = 'Hello There';
};

setTimeout(hello, 2000);
