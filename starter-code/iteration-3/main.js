// Add the reference to the interface
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
var TodoList = /** @class */ (function () {
    function TodoList(newArr) {
        if (newArr === void 0) { newArr = []; }
        this.newArr = newArr;
    }
    TodoList.prototype.addTask = function (task) {
        this.newArr.push(task);
        console.log("Nueva tarea " + task.title);
        console.log(this.newArr.length);
        return this.newArr.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.newArr.forEach(function (e) {
            return console.log(e);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        this.newArr.splice(this.newArr.indexOf(task), 1);
        console.log("Eliminada tarea " + task.title);
        console.log(this.newArr.length);
        return this.newArr.length;
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
