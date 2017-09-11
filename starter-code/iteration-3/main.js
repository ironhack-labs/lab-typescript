var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
        this.updateAt = new Date;
    }
    TodoItem.prototype.toggleStatus = function () {
        if (this.status === false) {
            this.status = true;
            this.updateAt = new Date;
        }
        else {
            this.status = false;
            this.updateAt = new Date;
        }
    };
    return TodoItem;
}());
var tasks = new Array();
var TodoList = (function () {
    function TodoList() {
    }
    TodoList.prototype.addTask = function (task) {
        tasks.push(task);
        return tasks.length;
    };
    TodoList.prototype.listAllTasks = function () {
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            console.log(task);
        }
    };
    TodoList.prototype.deleteTask = function (task) {
        var taskIndex = tasks.indexOf(task);
        if (taskIndex !== -1) {
            tasks[taskIndex].toggleStatus();
        }
        return tasks.length;
    };
    TodoList.prototype.listUncomplete = function () {
        for (var _i = 0, tasks_2 = tasks; _i < tasks_2.length; _i++) {
            var task = tasks_2[_i];
            if (task.status === false) {
                console.log(task);
            }
        }
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
