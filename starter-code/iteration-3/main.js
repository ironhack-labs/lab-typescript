// Add the reference to the interface
var testArray = [];
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(taskTitle, update) {
        if (update === void 0) { update = new Date; }
        this.updatedAt = new Date;
        this.title = taskTitle;
        this.updatedAt = update;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (status === 'finished') {
            this.status = false;
        }
        else {
            this.status = true;
        }
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList(item) {
        this.TodoItems = item;
    }
    TodoList.prototype.addTask = function (task) {
        testArray.push(task);
        console.log(testArray.length);
        return testArray.length;
    };
    TodoList.prototype.listAllTasks = function () {
        testArray.forEach(function (element) {
            console.log(element.title + "update at " + element.updatedAt);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        var removePosition = testArray.indexOf(task);
        testArray.splice(removePosition, 1);
        console.log('deletion successful');
        return testArray.length;
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
// myTodos.listUncomplete();
