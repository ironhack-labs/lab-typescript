// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.status = true;
        this.title = title;
        this.updatedAt = new Date;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status;
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
    }
    TodoList.prototype.addTask = function (task) {
        this.array.push(task);
        console.log(task + " has been added");
        console.log(task.length);
        return task.length;
    };
    TodoList.prototype.listAllTasks = function () {
        console.log(this.array);
    };
    TodoList.prototype.deleteTask = function (task) {
        var index = this.array.indexOf(task);
        this.array.splice(index, 1);
        console.log("the " + task + " has been deleted");
        return this.array.length;
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
