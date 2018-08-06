// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
        this.title = title;
        this.status = false;
        this.updatedAt = new Date();
    }
    TodoItem.prototype.toggleStatus = function () {
        return !this.status;
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.listItemElements = [];
    }
    TodoList.prototype.addTask = function (todoItem) {
        this.listItemElements.push(todoItem);
        console.log("Task " + todoItem.title + " inserted to the list");
        return this.listItemElements.length;
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        this.listItemElements.forEach(function (listItem) {
            console.log(listItem.title, listItem.status, listItem.updatedAt);
        });
    };
    ;
    TodoList.prototype.deleteTask = function (todoItem) {
        var position = this.listItemElements.indexOf(todoItem);
        this.listItemElements.splice(position, 1);
        console.log(todoItem.title + " removed from the list");
        return this.listItemElements.length;
    };
    ;
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
//myTodos.listUncomplete();
