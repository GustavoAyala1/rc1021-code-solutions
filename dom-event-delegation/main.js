const $taskList = document.querySelector('.task-list');

const handleTask = event => {
  const tagName = event.target.tagName;
  const target = event.target;
  if (tagName === 'BUTTON' && target) {
    target.closest('.task-list-item').remove();
  }
};

$taskList.addEventListener('click', handleTask);
