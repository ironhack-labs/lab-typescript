// Add the reference to the interface
// Execution
var TodoItem = /** @class */ (function () {
    function TodoItem(task) {
        this.task = task;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status;
        return this.status;
    };
    return TodoItem;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.taskArray = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.taskArray.push(task);
        console.log("Task \"" + task + "\" inserted in the list");
        return this.taskArray.length;
    };
    TodoList.prototype.listAllTasks = function () {
        for (var i = 0; i < this.taskArray.length; i++) {
            console.log(this.taskArray[i]);
        }
    };
    TodoList.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.taskArray.length; i++) {
            if (this.taskArray[i] === task) {
                this.taskArray.splice(i, 1);
            }
        }
        console.log("Task \"" + task + "\" removed from the list");
        return this.taskArray.length;
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
//myTodos.listUncomplete();
