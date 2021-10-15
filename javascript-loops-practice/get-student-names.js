/* exported getStudentNames */

function getStudentNames(students) {
  const names = [];
  let key;
  for (key in students) {
    names.push(students[key].name);
  }
  return names;
}
