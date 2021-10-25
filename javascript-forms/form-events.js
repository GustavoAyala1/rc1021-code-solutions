const $formName = document.forms[0].name;
const $formEmail = document.forms[0].email;
const $formTextArea = document.forms[0].message;

const handleFocus = event => {
  console.log('Focus has been fired');
  console.log(event.target.name);
};

const handleBlur = event => {
  console.log('Blur was fired');
  console.log(event.target.name);
};

const handleInput = event => {
  console.log(`Name: ${event.target.name} and Value: ${event.target.value}`);
};

$formName.addEventListener('focus', handleFocus);
$formName.addEventListener('blur', handleBlur);
$formName.addEventListener('input', handleInput);

$formEmail.addEventListener('focus', handleFocus);
$formEmail.addEventListener('blur', handleBlur);
$formEmail.addEventListener('input', handleInput);

$formTextArea.addEventListener('focus', handleFocus);
$formTextArea.addEventListener('blur', handleBlur);
$formTextArea.addEventListener('input', handleInput);
