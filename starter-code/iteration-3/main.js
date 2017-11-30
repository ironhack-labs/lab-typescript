var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = false;
    }
    TodoItem.prototype.toggleStatus = function () {
        return !this.status;
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(todolist) {
        if (todolist === void 0) { todolist = []; }
        this.todolist = todolist;
    }
    TodoList.prototype.addTask = function (task) {
        console.log('Adding ' + task.title);
        this.todolist.push(task);
        return this.todolist.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.todolist.forEach(function (task) {
            console.log(task);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        var i = this.todolist.indexOf(task);
        this.todolist.splice(i, 1);
        console.log(task.title + " removed");
        return this.todolist.length;
    };
    TodoList.prototype.listIncomplete = function () {
        this.todolist.forEach(function (task) {
            if (!task.status) {
                console.log('Incomplete Task: ');
                console.log(task.title);
            }
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
myTodos.listIncomplete();
