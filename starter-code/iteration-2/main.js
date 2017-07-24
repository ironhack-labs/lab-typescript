var Todo = (function () {
    function Todo(arrayOfTasks) {
        this.arrayOfTasks = arrayOfTasks;
    }
    Todo.prototype.addTask = function (task) {
        console.log("added task and new length is: ");
        return this.arrayOfTasks.push(task);
    };
    ;
    Todo.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.arrayOfTasks; _i < _a.length; _i++) {
            var task = _a[_i];
            console.log(task);
        }
    };
    ;
    Todo.prototype.deleteTask = function (task) {
        var index = this.arrayOfTasks.indexOf(task);
        if (index > -1) {
            this.arrayOfTasks.splice(index, 1);
        }
        return this.arrayOfTasks.length;
    };
    return Todo;
}());
var myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
