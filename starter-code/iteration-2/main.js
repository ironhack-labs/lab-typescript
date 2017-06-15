var Todo = (function () {
    function Todo(nam) {
        this.list = [];
        this.name = nam;
    }
    Todo.prototype.addTask = function (newTask) {
        this.list.push(newTask);
        console.log("=========== TASK ADDED ===========");
        console.log('Task "' + newTask + '" added to the list');
    };
    Todo.prototype.listAllTasks = function () {
        var _this = this;
        this.list.forEach(function (oneItem) {
            console.log((_this.list.indexOf(oneItem) + 1) + oneItem);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        if (this.list.indexOf(task) > -1) {
            this.list.splice(task);
            console.log("=========== TASK Remove ===========");
            console.log('Task "' + task + '" remove from the list');
        }
    };
    return Todo;
}());
var myTodos = new Todo('my todo list');
console.log("Number of items:", myTodos.addTask('This is our first task,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
