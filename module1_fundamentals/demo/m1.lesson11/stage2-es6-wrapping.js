class Person {
    constructor(first, last, age, gender) {
        // private (convension only)
        this._firstName = first;
        this._lastName = last;

        // public
        this.age = age;
        this.gender = gender;
    }

    getName() {
        return this._firstName + ' ' + this._lastName;
    }

    toString() {
        const genderStr = (this.gender === 'M') ? 'Male' : 'Female';
        return `${this.getName()} is  ${this.age} ${genderStr}`;
    };
}

class Teacher extends Person {
    constructor(first, last, age, gender, subject) {
        super(first, last, age, gender);
        this.subject = subject; // single string
        Teacher.numOfTeachers++;
    }
}

Teacher.numOfTeachers = 0;
Teacher.salary = 10000;

class Professor extends Teacher {
    constructor(first, last, age, gender, subject, trainee) {
        super(first, last, age, gender, subject);
        if (trainee) {
            this.trainee = trainee; // Object of type Intern
        }
    }

    toString() {
        // implement using super
        return super.toString() + 'foo';
    };
}

Professor.salary = 12000;


class Trainee extends Teacher {
    // Implement
}

class Student extends Person {
    constructor(first, last, age, gender, study) {
        super(first, last, age, gender);
        this.study = study;   // array of strings
    }

    toString() {
        // implement using super
    };
}

// task 1: add toString for Professor and Student
// task 2: Implement Trainee class
// task 3: create 3 students and add to DB
// task 4: add a function DB.getAllProfessors() which return all Professors in DB.teachers
// task 5: add a function DB.getTrainingPairsStr() which go through all Professors and return a string
// of Professor-Trainee pairs. like:
// Professor David Levi Trainee is: Sarit Hadad
// Professor Moshe Cohen Trainee is: Moshe Sharet

const teacher1 = new Professor('David', 'Levi', 40, 'M', 'Javascript');
const teacher2 = new Trainee('Sarit', 'Hadad', 35, 'F', 'HTML');
const student1 = new Student('Dudu', 'Aaharon', 28, 'M', ['Javascript', 'HTML']);

const DB = {
    teachers: [teacher1, teacher2],
    students: [student1], // TODO: add student2, student3
    getAllProfessors: function () {
        // TODO: implement
        return this.teachers;
    },
    getTrainingPairsStr: function () {
        // TODO: implement
        return '';
    }
};

// console.log(Teacher.salary);
// console.log(Teacher.numOfTeachers);
// console.log(teacher1.toString());
// console.log(student1.toString());
// console.log(DB.getTrainingPairs());
console.log(DB);
