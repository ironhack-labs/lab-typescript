var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status === true) {
            return false;
        }
        else {
            return true;
        }
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.TodoItem = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.TodoItem.push(task);
        return this.TodoItem.length;
    };
    TodoList.prototype.listAllTasks = function () {
        for (var i = 0; i < this.TodoItem.length; i++) {
            console.log(i);
        }
    };
    TodoList.prototype.deleteTask = function (task) {
        var taskIndex = this.TodoItem.indexOf(task);
        this.TodoItem.splice(taskIndex, 1);
        return this.TodoItem.length;
    };
    return TodoList;
}());
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
myTodos.listUncomplete();
