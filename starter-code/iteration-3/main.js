// Add the reference to the interface
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date;
    }
    TodoItem.prototype.statusToogle = function () {
        console.log(this.status);
        if (this.status === false) {
            this.status = true;
        }
        if (this.status === true) {
            this.status = false;
        }
        this.updatedAt = new Date;
        return this.status;
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.taskArray = [];
    }
    TodoList.prototype.addTask = function (todoItem) {
        this.taskArray.push(todoItem);
        return this.taskArray.length;
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.taskArray; _i < _a.length; _i++) {
            var task = _a[_i];
            console.log(task);
        }
    };
    TodoList.prototype.deleteTask = function (task) {
        var indexTask = this.taskArray.indexOf(task);
        this.taskArray.splice(indexTask, 1);
        return this.taskArray.length;
    };
    TodoList.prototype.listUncomplete = function () {
        for (var _i = 0, _a = this.taskArray; _i < _a.length; _i++) {
            var task = _a[_i];
            console.log(task);
        }
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
myTodos.listUncomplete();
