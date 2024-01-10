var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    var result;
    if (isDirector(employee)) {
        result = employee.workDirectorTasks();
    }
    else {
        result = employee.workTeacherTasks();
    }
    console.log(result);
    return result;
}
function teachClass(todayClass) {
    var result;
    if (todayClass === 'Math')
        result = 'Teaching Math';
    else if (todayClass === 'History')
        result = 'Teaching History';
    console.log(result);
    return result;
}
teachClass('Math');
teachClass('History');
