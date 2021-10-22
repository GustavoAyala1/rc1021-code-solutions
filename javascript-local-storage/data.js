/* exported todos */

var todos = [];
const previousTodosJson = localStorage.getItem('javascript-local-storage');
if (previousTodosJson !== null) {
  todos = JSON.parse(previousTodosJson);
}

window.addEventListener('beforeunload', () => {
  const todosJSON = JSON.stringify(todos);

  localStorage.setItem('javascript-local-storage', todosJSON);
}
);
