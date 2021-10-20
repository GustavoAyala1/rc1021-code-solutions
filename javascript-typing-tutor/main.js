// const $span = document.querySelectorAll("span");

// const typing = (event) => {
//   const typed = event.key;

//   let i = 0;
//   while (i < $span.length) {
//     $span[i].classList.add("correct");
//     i++;
//   }
// };

// document.addEventListener("keydown", typing);

// for (let i = 0; i < span.length; i++) {
//   if (span[i].innerText === typed && i === 0) {
//     span[i].classList.add("correct");
//     span[i].classList.remove("currentL");
//     span[i + 1].classList.add("currentL");
//   } else if (span[i].innerText === typed && i !== 0) {
//     span[i].classList.add("correct");
//     span[i + 1].classList.add("currentL");
//     span[i].classList.remove("currentL");
//     span[i - 1].classList.remove("wrong");
//   } else if (span[i].innerText !== typed) {
//     span[i].classList.add = "wrong";
//   }
// }
