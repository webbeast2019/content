// convert the entire system to Typescript
// create DB using factory function
type genderType = 'M' | 'F'

// or
enum genderEnum { Male, Female }

abstract class Person {
    private readonly firstName: string;
    private readonly lastName: string;
    public age: number;
    public gender: genderType;

    //TODO: add types
    protected constructor(first: string, last, age, gender) {
        // private
        this.firstName = first;
        this.lastName = last;
        // public
        this.age = age;
        this.gender = gender;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }

    toString() {
        const genderStr = (this.gender === 'M') ? 'Male' : 'Female';
        return `${this.getName()} is  ${this.age} ${genderStr}`;
    };
}

abstract class Teacher extends Person {
    private readonly subject;

    //TODO: add types
    protected constructor(first, last, age, gender, subject) {
        super(first, last, age, gender);
        this.subject = subject; // single string
    }

    //TODO: override toString
}

class Student extends Person {
    //TODO: add types
}

class Professor extends Teacher {

}

// const teacher1 = new Person('Sarit', 'Hadad', 35, 'F');  // cannot create instance of abstract class
const teacher2 = new Professor('Sarit', 'Hadad', 35, 'F', 'HTML');

// teacher2.firstName // cannot access private members

interface DB {
    teachers: Array<Teacher>;
    // students: Array<Student>;
    getAllProfessors(): Array<Professor>;
    // getTrainingPairsStr(): string;
}

function createDB(teachers: Array<Teacher>, student: Array<Student>): DB {
    return {
        teachers: teachers,
        getAllProfessors: function (): Array<Professor> {
            return teachers;
        }
        // TODO: implement
    };
}