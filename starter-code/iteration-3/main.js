var TodoItem = (function () {
    function TodoItem(tite, updat) {
        if (updat === void 0) { updat = Date.now(); }
        this.status = true;
        this.tittle = tite;
        this.updatedAt = updat;
    }
    ;
    TodoItem.prototype.onORoff = function () {
        if (this.status === true) {
            this.status = false;
            this.updatedAt = Date.now();
        }
    };
    ;
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList() {
        this.lists = [];
    }
    TodoList.prototype.addTask = function (name) {
        console.log(this.lists);
        this.lists.push(name);
        console.log("Item " + this.lists.indexOf(name) + " --> " + name.tittle);
    };
    ;
    TodoList.prototype.listAllTasks = function () {
        var _this = this;
        this.lists.forEach(function (one) {
            console.log("Item " + _this.lists.indexOf(one) + " --> " + one.tittle);
        });
    };
    ;
    TodoList.prototype.deleteTask = function (name) {
        console.log("Item " + this.lists.indexOf(name) + " --> " + name.tittle);
        if (this.lists.indexOf(name) > -1) {
            name.onORoff();
        }
    };
    ;
    TodoList.prototype.listUncomplete = function () {
        var _this = this;
        this.lists.forEach(function (one) {
            if (one.status) {
                console.log("Item " + _this.lists.indexOf(one) + " --> " + one.tittle);
            }
        });
    };
    ;
    return TodoList;
}());
var task1 = new TodoItem('This is our first task');
console.log(task1);
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodo = new TodoList();
console.log("Number of items:", myTodo.addTask(task1));
console.log("Number of items:", myTodo.addTask(task2));
console.log("Number of items:", myTodo.addTask(task3));
console.log("Number of items:", myTodo.addTask(task4));
console.log("Number of items:", myTodo.addTask(task5));
myTodo.listAllTasks();
console.log("Number of items:", myTodo.deleteTask(task3));
console.log("Number of items:", myTodo.deleteTask(task4));
console.log("Number of items:", myTodo.deleteTask(task5));
myTodo.listUncomplete();
