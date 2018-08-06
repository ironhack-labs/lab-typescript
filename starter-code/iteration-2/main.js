// Add the reference to the "TodoInterface"
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(vector) {
        this.vector = vector;
    }
    Todo.prototype.addTask = function (task) {
        this.vector.push(task);
        console.log('=========== NEW TASK ===========');
        console.log("Task " + task + " inserted in the list");
        return this.vector.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log(this.vector);
    };
    Todo.prototype.deleteTask = function (task) {
        for (var i = 0; task !== this.vector[i]; i++) {
            if (task === this.vector[i])
                this.vector.splice(i, 1);
        }
        console.log('=========== TASK REMOVED ===========');
        console.log("Task " + task + " removed from the list");
        return this.vector.length;
    };
    return Todo;
}());
// Execution
var myTodos = new Todo(this.vector);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
