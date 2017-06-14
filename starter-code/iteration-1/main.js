var toDolist = (function () {
    function toDolist(listName) {
        console.log("Created new To Do List called" + listName);
        this.tasks = [];
    }
    toDolist.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Added " + task);
        return this.tasks.length;
    };
    toDolist.prototype.listAllTasks = function () {
        console.log("--------------- Task List -------------");
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var listItem = _a[_i];
            console.log(listItem);
        }
    };
    toDolist.prototype.deleteTask = function (str) {
        var findTask = this.tasks.indexOf(str);
        console.log("Task # " + findTask);
        return this.tasks.length;
    };
    return toDolist;
}());
var tasklist = new toDolist("Typescript ToDo List Bruh");
console.log("Number of items:", tasklist.addTask('This is our first task'));
console.log("Number of items:", tasklist.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", tasklist.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", tasklist.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", tasklist.addTask('Finish this iteration 3!! 🤓'));
tasklist.listAllTasks();
console.log("Number of items:", tasklist.deleteTask('Finish this iteration 1!! 🤓'));
tasklist.listAllTasks();
