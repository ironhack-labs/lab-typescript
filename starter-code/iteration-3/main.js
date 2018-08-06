// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title, updatedAt) {
        if (updatedAt === void 0) { updatedAt = new Date(); }
        this.title = title;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.updatedAt = new Date();
        this.status = false;
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList() {
    }
    TodoList.prototype.addTask = function (task) {
        this.vector.push(task);
        console.log('=========== NEW TASK ===========');
        console.log("Task " + task + " inserted in the list");
        return this.vector.length;
    };
    TodoList.prototype.listAllTasks = function () {
        console.log(this.vector);
    };
    TodoList.prototype.deleteTask = function (task) {
        for (var i = 0; task !== this.vector[i]; i++) {
            if (task === this.vector[i])
                this.vector.splice(i, 1);
        }
        console.log('=========== TASK REMOVED ===========');
        console.log("Task " + task + " removed from the list");
        return this.vector.length;
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
