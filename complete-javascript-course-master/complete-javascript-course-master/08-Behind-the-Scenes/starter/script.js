'use strict';
const kunal = {
  firstName: 'Kunal',
  age: 24,
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => {
    console.log(this);
    console.log(`Hey there, how are you ${this.firstName}`);
  },
  welcome: function () {
    console.log(this);
    console.log(`Hi ${this.firstName}, you are ${2037 - this.year} years old.`);
  },
};
// kunal.calcAge();    // this keyword points to the kunal object
// kunal.greet();   // this keyword points to the global object, as arrow function do not have it's this keyword
kunal.welcome(); // this keyword points to the kunal object as function declaration has it's this keyword
