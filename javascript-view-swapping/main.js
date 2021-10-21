const $container = document.querySelector('.tab-container');
const $tabList = document.querySelectorAll('.tab');
const $viewList = document.querySelectorAll('.view');

const handleClick = event => {
  const target = event.target;
  if (target.matches('.tab')) {
    const dataView = target.getAttribute('data-view');
    for (let i = 0; i < $tabList.length; i++) {
      if ($tabList[i] === target) {
        target.className = 'tab active';
      } else {
        $tabList[i].className = 'tab';
      }
    }
    for (let i = 0; i < $viewList.length; i++) {
      if ($viewList[i].getAttribute('data-view') === dataView) {
        $viewList[i].className = 'view';
      } else {
        $viewList[i].className = 'view hidden';
      }
    }
  }
};

$container.addEventListener('click', handleClick);
