var Todo = (function () {
    function Todo(todolist) {
        if (todolist === void 0) { todolist = []; }
        this.todolist = todolist;
    }
    Todo.prototype.addTask = function (task) {
        this.todolist.push(task);
        return this.todolist.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.todolist.forEach(function (task) {
            console.log(task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var i = this.todolist.indexOf(task);
        this.todolist.splice(i, 1);
        return this.todolist.length;
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
