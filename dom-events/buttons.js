const $clickBtn = document.querySelector('.click-button');
const $hoverBtn = document.querySelector('.hover-button');
const $doubleBtn = document.querySelector('.double-click-button');

const handleClick = event => {
  console.log('button clicked', event, event.target);
};

const handleMouseOver = event => {
  console.log('button hovered', event, event.target);
};

const handleDoubleClick = event => {
  console.log('button double clicked', event, event.target);
};

$clickBtn.addEventListener('click', handleClick);
$hoverBtn.addEventListener('mouseover', handleMouseOver);
$doubleBtn.addEventListener('dblclick', handleDoubleClick);
