var Todo = (function () {
    function Todo(items) {
        this.items = items;
    }
    Todo.prototype.addTask = function (task) {
        this.items.push(task);
        console.log("Task " + task + " inserted in the list");
        return this.items.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.items.forEach(function (itemInList) {
            console.log(itemInList);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var _this = this;
        this.items.forEach(function (itemList) {
            var index = _this.items.indexOf(itemList);
            if (task === itemList) {
                _this.items.splice(index, 1);
            }
        });
        console.log("Task " + task + " was deleted from the list");
        return this.items.length;
    };
    return Todo;
}());
var mySecondList = new Todo([]);
mySecondList.addTask('This is our first task');
mySecondList.addTask('Eat pizza 🍕 yummy!!!');
mySecondList.addTask('Finish this iteration 1!! 🤓');
mySecondList.listAllTasks();
mySecondList.deleteTask('Finish this iteration 1!! 🤓');
mySecondList.listAllTasks();
