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
            this.setTrainee(trainee); // Object of type Intern
        }
    }

    toString() {
        // implement using super
        return super.toString() + ' and I am a Professor.';
    }

    setTrainee(trainee) {
        this.trainee = trainee;
    }
}

Professor.salary = 12000;


class Trainee extends Teacher {
    constructor(first, last, age, gender, subject, trainer) {
        super(first, last, age, gender, subject);
        if (trainer) {
            this.setTrainer(trainer); // Object of type Intern
        }
    }

    toString() {
        // implement using super
        return super.toString() + ' and I am a Professor.';
    };

    setTrainer(trainer) {
        this.trainer = trainer
    }
}

class Student extends Person {
    constructor(first, last, age, gender, study) {
        super(first, last, age, gender);
        this.study = study;   // array of strings
    }

    toString() {
        return super.toString() + ' and I am a Student.';
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
const teacher2 = new Trainee('Sarit', 'Hadad', 35, 'F', 'HTML', teacher1);
teacher1.setTrainee(teacher2);

const teacher3 = new Professor('Omer', 'Adam', 28, 'M', 'Angular');
const teacher4 = new Trainee('Neta', 'Barzilai', 25, 'F', 'CSS', teacher3);
teacher3.setTrainee(teacher4);


const student1 = new Student('Dudu', 'Aaharon', 28, 'M', ['Javascript', 'HTML']);

const DB = {
    teachers: [teacher1, teacher2, teacher3, teacher4],
    students: [student1],
    getAllProfessors: function () {
        return this.teachers.filter(t => t instanceof Professor);
    },
    getTrainingPairsStr: function () {
        const professors = this.getAllProfessors();
        let str = '';
        professors.forEach(p => {
            str += `Professor ${p.getName()} Trainee is: ${p.trainee.getName()}\n`
        });

        return str;
    }
};

// console.log(Teacher.salary);
// console.log(Teacher.numOfTeachers);
// console.log(teacher1.toString());
// console.log(student1.toString());
// console.log(DB.getAllProfessors());
console.log(DB.getTrainingPairsStr());
// console.log(DB);
