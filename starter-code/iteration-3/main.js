var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = (this.status ? false : true);
        this.updatedAt = new Date(new Date().getTime());
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(toDoList) {
        if (toDoList === void 0) { toDoList = []; }
        this.toDoList = toDoList;
    }
    TodoList.prototype.addTask = function (task) {
        this.toDoList.push(task);
        console.log("Task " + task.title + " inserted in the list");
        return this.toDoList.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.toDoList.forEach(function (task, index) {
            console.log("task " + (index + 1) + ": " + task.title);
        });
    };
    TodoList.prototype.listUncomplete = function () {
        this.toDoList.forEach(function (task, index) {
            if (!task.status) {
                console.log("Uncompleted task " + (index + 1) + ": " + task.title);
            }
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        var index = this.toDoList.indexOf(task);
        var numberLeft = 0;
        if (index > -1) {
            this.toDoList[index].toggleStatus();
            console.log("Task " + task.title + " deleted from the list updatedAt " + this.toDoList[index].updatedAt);
            this.toDoList.forEach(function (task) {
                if (!task.status) {
                    numberLeft++;
                }
            });
            return numberLeft;
        }
        console.log("The task " + task.title + " isn't in the list");
        this.toDoList.forEach(function (task) {
            if (!task.status) {
                numberLeft++;
            }
        });
        return numberLeft;
    };
    return TodoList;
}());
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos2 = new TodoList();
console.log("Number of items:", myTodos2.addTask(task1));
console.log("Number of items:", myTodos2.addTask(task2));
console.log("Number of items:", myTodos2.addTask(task3));
console.log("Number of items:", myTodos2.addTask(task4));
console.log("Number of items:", myTodos2.addTask(task5));
myTodos2.listAllTasks();
console.log("Number of items:", myTodos2.deleteTask(task3));
console.log("Number of items:", myTodos2.deleteTask(task4));
console.log("Number of items:", myTodos2.deleteTask(task5));
myTodos2.listUncomplete();
