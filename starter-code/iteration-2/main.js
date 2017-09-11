var tasks = new Array();
var Todo = (function () {
    function Todo() {
    }
    Todo.prototype.addTask = function (task) {
        tasks.push(task);
        return tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            console.log(task);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        var taskIndex = tasks.indexOf(task);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
        }
        return tasks.length;
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
