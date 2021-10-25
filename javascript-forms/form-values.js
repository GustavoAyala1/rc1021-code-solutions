const $formTwo = document.forms.contactForm;
// const $formTwo = document.getElementById("contact-form");
// Either way works fine by id works well

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
