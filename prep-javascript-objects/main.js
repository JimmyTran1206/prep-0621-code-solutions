const person = {
  firstName: 'Jimmy',
  lastName: 'Tran',
  hobby: 'Coding'
};
console.log(person);
let fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);
person.job = 'Apprentice Coder';
console.log("The person's current job is: ", person.job);
person.previousJob = 'Student';
console.log("The person's previous job is: ", person.previousJob);
console.log(person);
