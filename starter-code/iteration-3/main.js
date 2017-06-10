var TodoItem = (function () {
    function TodoItem(taskTitle) {
        this.taskTitle = taskTitle;
        this.taskCompleted = false;
    }
    TodoItem.prototype.toggleCompleted = function () {
        return !this.taskCompleted;
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(taskList) {
        if (taskList === void 0) { taskList = []; }
        this.taskList = taskList;
    }
    TodoList.prototype.addTask = function (task) {
        console.log("Adding " + task.taskTitle);
        this.taskList.push(task);
        return this.taskList.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.taskList.forEach(function (oneTask) {
            console.log(oneTask.taskTitle);
        });
    };
    TodoList.prototype.deleteTask = function (taskToDelete) {
        var _this = this;
        this.taskList.forEach(function (oneTask) {
            if (oneTask === taskToDelete) {
                var indexToDelete = _this.taskList.indexOf(oneTask);
                _this.taskList.splice(indexToDelete, 1);
                console.log(oneTask.taskTitle + " removed");
            }
        });
        return this.taskList.length;
    };
    TodoList.prototype.listUncomplete = function () {
        this.taskList.forEach(function (oneTask) {
            console.log(oneTask.taskTitle);
        });
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
myTodos.listUncomplete();
