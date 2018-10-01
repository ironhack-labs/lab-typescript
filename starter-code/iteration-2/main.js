var firstArray = [];
var Todo = /** @class */ (function () {
    function Todo(element) {
        this.task = element;
    }
    Todo.prototype.addTask = function (task) {
        firstArray.push(task);
        return firstArray;
    };
    Todo.prototype.listAllTasks = function () {
        firstArray.forEach(function (element) {
            console.log(element);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        firstArray.splice(0, 1, task);
        console.log(task + " have been removed");
        console.log("the current number of elements is " + task.length);
        return task.length;
    };
    return Todo;
}());
// Execution
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
