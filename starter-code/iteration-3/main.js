// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title, isDone, updatedAt) {
        if (isDone === void 0) { isDone = false; }
        if (updatedAt === void 0) { updatedAt = new Date(); }
        this.title = title;
        this.isDone = isDone;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.checkDone = function () {
        if (this.isDone) {
            this.isDone = false;
        }
        else {
            this.isDone = true;
        }
    };
    return TodoItem;
}());
// 1. Create a class Todo that implements the Interface created before.
var TodoList = /** @class */ (function () {
    function TodoList(tasks) {
        if (tasks === void 0) { tasks = []; }
        var _this = this;
        this.tasks = tasks;
        this.addTask = function (loquesea) {
            _this.tasks.push(loquesea);
        };
        this.listAllTasks = function () {
            console.log(_this.tasks);
        };
        this.deleteTask = function (el) {
            var pos = _this.tasks.indexOf(el);
            _this.tasks.splice(pos, 1);
        };
        this.listUncomplete = function () {
            _this.tasks.forEach(function (e) {
                if (!e.isDone) {
                    console.log(e);
                }
            });
        };
    }
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
