var TodoItem = (function () {
    function TodoItem(title, updatedAt) {
        if (updatedAt === void 0) { updatedAt = new Date(); }
        this.title = title;
        this.updatedAt = updatedAt;
        this.status = false;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !this.status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.listOfTasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.listOfTasks.push(task);
        return this.listOfTasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.listOfTasks.forEach(function (oneTask) {
            console.log(oneTask);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        var indexOfString = this.listOfTasks.indexOf(task);
        if (indexOfString) {
            this.listOfTasks.splice(indexOfString, 1);
            console.log(task + ' has been deleted');
        }
        else {
            console.log("Task does not exist");
        }
        return this.listOfTasks.length;
    };
    TodoList.prototype.listIncomplete = function () {
        var incompleteList = this.listOfTasks.filter(function (oneTask) {
            return !oneTask.status;
        });
        console.log(incompleteList);
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
myTodos.listIncomplete();
