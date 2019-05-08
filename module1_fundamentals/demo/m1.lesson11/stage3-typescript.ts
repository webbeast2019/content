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
    protected constructor(first: string, last: string, age: number, gender: genderType) {
        // private
        this.firstName = first;
        this.lastName = last;
        // public
        this.age = age;
        this.gender = gender;
    }

    getName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    toString(): string {
        const genderStr = (this.gender === 'M') ? 'Male' : 'Female';
        return `${this.getName()} is  ${this.age} ${genderStr}.`;
    };
}

abstract class Teacher extends Person {
    private readonly subject;

    protected constructor(first: string, last: string, age: number, gender: genderType, subject: string) {
        super(first, last, age, gender);
        this.subject = subject; // single string
    }

    toString(): string {
        return super.toString() + `Teaching: ${this.subject}.`;
    }
}

class Student extends Person {
    //TODO: add types
}

class Professor extends Teacher {

    private trainee: Trainee;

    constructor(first: string, last: string, age: number, gender: genderType, subject: string) {
        super(first, last, age, gender, subject);
    }

    setTrainee(trainee: Trainee) {
        this.trainee = trainee;
    }

    getTraineeName(): string {
        return (this.trainee) ? this.trainee.getName() : null;
    }

    toString(): string {
        const traineeStr = (this.trainee) ? `trainee: ${this.trainee.getName()}` : '';
        return super.toString() + traineeStr;
    }
}

class Trainee extends Teacher {
    private trainer: Professor;

    constructor(first: string, last: string, age: number, gender: genderType, subject: string) {
        super(first, last, age, gender, subject);
    }

    setProfessor(trainer: Professor) {
        this.trainer = trainer;
    }

    toString(): string {
        const traineeStr = (this.trainer) ? `trainer: ${this.trainer.getName()}` : '';
        return super.toString() + traineeStr;
    }
}

// const teacher1 = new Person('Sarit', 'Hadad', 35, 'F');  // cannot create instance of abstract class
const teacher1 = new Professor('Sarit', 'Hadad', 35, 'F', 'HTML');
const teacher2 = new Professor('Omer', 'Adam', 30, 'M', 'Javascript');
const teacher3 = new Trainee('Moshe', 'Perets', 41, 'M', 'Javascript');
teacher2.setTrainee(teacher3);
teacher3.setProfessor(teacher2);

interface DB {
    teachers: Array<Teacher>,

    // students: Array<Student>,
    getAllProfessors(): Array<Professor>,

    getTrainingPairsStr(): string
}

function createDB(teachers: Array<Teacher>, student: Array<Student>): DB {
    return {
        teachers: teachers,
        getAllProfessors: function (): Array<Professor> {
            return <Array<Professor>>teachers.filter(t => t instanceof Professor);
        },
        getTrainingPairsStr: function (): string {
            let str = '';
            this.getAllProfessors().forEach(prof => {
                const traineeName = prof.getTraineeName();
                const traineeStr = (traineeName) ? `(${traineeName})` : '';
                str += `[${prof.getName()}${traineeStr}]`
            });
            return str;
        }
    };
}

const db = createDB([teacher1, teacher2, teacher3], []);
console.log(db.getTrainingPairsStr());
