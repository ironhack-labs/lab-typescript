var ToDo = (function () {
    function ToDo(items) {
        this.items = items;
    }
    ToDo.prototype.addTask = function (task) {
        this.items.push(task);
        console.log("Task " + task + " inserted in the list");
        console.log("Number of items: " + this.items.length);
    };
    ToDo.prototype.listAllTasks = function (toDoList) {
        toDoList.items.forEach(function (itemInList) {
            console.log(itemInList);
        });
    };
    ToDo.prototype.deleteTask = function (task) {
        var _this = this;
        this.items.forEach(function (itemList) {
            var index = _this.items.indexOf(itemList);
            if (task === itemList) {
                _this.items.splice(index, 1);
            }
        });
        console.log("Task " + task + " was deleted from the list");
        console.log("Number of items: " + this.items.length);
    };
    return ToDo;
}());
var myList = new ToDo(["first item"]);
myList.addTask("Eat pizza");
myList.addTask("go online shopping");
myList.addTask("but milk");
myList.listAllTasks(myList);
myList.deleteTask("Eat pizza");
