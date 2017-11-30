var Todo = (function () {
    function Todo(myTasks) {
        this.myTasks = myTasks;
    }
    Todo.prototype.listAllTasks = function () {
        console.log(myTasks);
    };
    Todo.prototype.deleteTask = function (task) {
        console.log("We just deleted a task");
        var index = myTasks.indexOf(task);
        myTasks.splice(index, 1);
    };
    Todo.prototype.addTask = function (task) {
        var result = myTasks.push(task);
        console.log("\n        =========== NEW TASK ===========\n        We have inserted the task: " + task + ".\n        And we have a total of this many tasks: " + result + ".\n        ");
    };
    return Todo;
}());
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
