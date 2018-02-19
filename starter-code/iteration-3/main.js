var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
        this.status = true;
        this.updateAt = new Date;
    }
    TodoItem.prototype.toggleStatus = function () { this.status ? this.status = true : this.status = false; };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) { this.tasks.push(task); };
    ;
    TodoList.prototype.listAllTasks = function () {
        document.body.innerHTML += "<ul>";
        this.tasks.forEach(function (t) {
            document.body.innerHTML += "<li>" + t.title + "</li>";
        });
        document.body.innerHTML += "</ul>";
    };
    ;
    TodoList.prototype.deleteTask = function (task) { this.tasks.splice(this.tasks.indexOf(task), 1); };
    TodoList.prototype.listUncomplete = function () {
        document.body.innerHTML += "<ul>";
        this.tasks.forEach(function (task) {
            if (task.status) {
                document.body.innerHTML += "<li>" + task.title + "</li>";
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
myTodos.listUncomplete();
