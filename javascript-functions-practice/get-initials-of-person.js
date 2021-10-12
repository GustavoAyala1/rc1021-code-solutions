/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const firstInitial = person.firstName[0];
  const secondInitial = person.lastName[0];
  return firstInitial + secondInitial;
}
