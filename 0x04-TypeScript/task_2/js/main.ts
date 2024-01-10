interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: Teacher | Director): employee is Director {
    return employee instanceof Director;
}
   
function executeWork(employee: Teacher | Director): string {
    let result: string;
    if (isDirector(employee)) {
        result = employee.workDirectorTasks();
    } else {
        result = employee.workTeacherTasks();
    }
    console.log(result);
    return result;
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
    let result: string;
    if (todayClass === 'Math') result = 'Teaching Math';
    else if (todayClass === 'History') result = 'Teaching History';
    console.log(result);
    return result;
}
