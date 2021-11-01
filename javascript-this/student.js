/* exported student */
const student = {
  firstName: 'Gustavo',
  lastName: 'Ayala',
  subject: 'JavaScript',
  getFullName: function () { return `${this.firstName} ${this.lastName}`; },
  getIntroduction: function () { return `Hello, my name is ${this.firstName} ${this.lastName} and I am studying ${this.subject}.`; }
};
