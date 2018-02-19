// Add the reference to the "TodoInterface"
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(toDoList) {
        this.toDoList = toDoList;
    }
    Todo.prototype.addTask = function (task) {
        this.toDoList.push(task);
        console.log("=====NEW TASK======\n        Task \"" + task + "\" insterted to the list\n        Number of items: " + this.toDoList.length);
        return this.toDoList.length;
    };
    Todo.prototype.deleteTask = function (task) {
        var _this = this;
        var i = 0;
        this.toDoList.forEach(function (item) {
            if (item === task) {
                _this.toDoList.splice(i, 1);
                console.log("The item " + task + " was deleted. Task left to do: " + _this.toDoList.length);
            }
            i++;
        });
        return this.toDoList.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.toDoList.forEach(function (item) {
            console.log(item);
        });
    };
    ;
    return Todo;
}());
;
// Execution
var myTodos = new Todo(['mop floor', 'write book']);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
