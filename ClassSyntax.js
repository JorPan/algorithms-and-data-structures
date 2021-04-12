// ES2015 class syntax

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  //INSTANCE METHODS - can be called on each instance of this class.
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName} and you are in year ${this.year}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }

  //CLASS METHODS - uses static keyword to defin a method for a class.
  // static methods are called without instantiating their class and CANNOT be called through a class INSTANCE. Static methods are often used to create utility functions for an application.

  static enrollStudents(...students) {
    // maybe send an email here or whatever...
    return "ENROLLING STUDENTS...";
  }
}

let firstStudent = new Student("Colt", "Steele", 10);
let secondStudent = new Student("Jor", "Pan");
secondStudent.year = 1;
secondStudent.markLate();
secondStudent.addScore(100);
secondStudent.addScore(90);
Student.enrollStudents();

console.log(
  secondStudent.firstName,
  secondStudent.lastName,
  secondStudent.year,
  secondStudent.fullName(),
  secondStudent.markLate(),
  secondStudent.scores,
  secondStudent.calculateAverage(),
  Student.enrollStudents()
);
