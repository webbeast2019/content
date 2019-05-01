function Person(first, last, age, gender) {
    //private members
    var _firstName = first;
    var _lastName = last;

    // public
    this.getName = function () {
        return _firstName + ' ' + _lastName;
    };
    this.age = age;
    this.gender = gender;
}

Person.prototype.toString = function () {
    var genderStr = (this.gender === 'M') ? 'Male' : 'Female';
    return this.getName() + 'is ' + this.age + ' years old ' + genderStr;
};

function Teacher(first, last, age, gender, subject) {
    Teacher.prototype.numOfTeachers++;
    Person.call(this, first, last, age, gender);
    this.subject = subject;
}

Teacher.prototype.numOfTeachers = 0;
Teacher.prototype.salary = 10000;

// task 1: add toString for Teacher (can you use Person.prototype.toString?)
// task 2: add student class
// task 3: create 3 students and add to DB

// var teacher1 = new Teacher('David', 'Levi', 40, 'M');
var teacher1 = new Teacher('David', 'Levi', 40, 'M', 'Javascript');
var teacher2 = new Teacher('Sarit', 'Hadad', 35, 'F', 'HTML');


//task 1: add student

var DB = {
    teachers: [teacher1, teacher2],
    // students: [student1, student2, student3]
};

// console.log(teacher1.numOfTeachers);
// console.log(teacher1.salary);
// console.log(teacher1.toString());
// console.log(student1.toString());
console.log(DB);