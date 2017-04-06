
// Create class TodoItem that implements the corresponding interface
var TodoItem = (function () {
    function TodoItem(title) {
        if (title === void 0) { title = "New task"; }
        this.title = " ";
        this.status = false;
        this.title = title;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status !== false) {
            this.updatedAt = new Date();
        }
    };
    ;
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = (function () {
    function TodoList() {
        this.todoList = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.todoList.push(task);
        return this.todoList.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.todoList.forEach(function (task) {
            console.log(task);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        var index = this.todoList.indexOf(task);
        this.todoList.splice(index, 1);
        return this.todoList.length;
    };
    TodoList.prototype.listUncompleted = function () {
        this.todoList.forEach(function (task) {
            if (task.status === false) {
                console.log(task.title, task.updatedAt + ' is uncompleted');
            }
        });
    };
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncompleted();
