const $formTwo = document.forms[0];

const handleSubmit = event => {
  event.preventDefault();
  const submitInfo = {
    name: $formTwo.name.value,
    email: $formTwo.email.value,
    textArea: $formTwo.message.value
  };
  console.log(submitInfo);
  $formTwo.reset();
};

$formTwo.addEventListener('submit', handleSubmit);
