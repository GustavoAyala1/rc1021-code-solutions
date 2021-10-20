const $formTwo = document.forms[0];
const $formName = document.forms[0].name;
const $formEmail = document.forms[0].email;
const $formTextArea = document.forms[0].message;

const handleSubmit = event => {
  event.preventDefault();
  const submitInfo = {
    name: $formName.value,
    email: $formEmail.value,
    textArea: $formTextArea.value
  };
  console.log(submitInfo);
  $formTwo.reset();
};

$formTwo.addEventListener('submit', handleSubmit);
