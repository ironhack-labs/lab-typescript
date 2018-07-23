// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toogleStatus = function () {
        this.status = !this.status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.TodoItem = [];
    }
    TodoList.prototype.addTask = function (TodoItem) {
        this.TodoItem.push(TodoItem);
        console.log("Number of items: " + this.TodoItem.length);
        return this.TodoItem.length;
    };
    TodoList.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.TodoItem; _i < _a.length; _i++) {
            var TodoItem_1 = _a[_i];
            console.log(TodoItem_1);
        }
    };
    TodoList.prototype.deleteTask = function (x) {
        this.TodoItem.splice(this.TodoItem.indexOf(x), 1);
        console.log("Number of items: " + this.TodoItem.length);
        return this.TodoItem.length;
    };
    return TodoList;
}());
//Execution
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
// myTodos.listUncomplete();
