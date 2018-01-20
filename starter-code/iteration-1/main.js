var toDoList = (function () {
    function toDoList(nam) {
        this.list = [];
        this.name = nam;
    }
    toDoList.prototype.addTask = function (newTask) {
        this.list.push(newTask);
        console.log("=========== TASK ADDED ===========");
        console.log('Task "' + newTask + '" added to the list');
    };
    toDoList.prototype.listAllTasks = function () {
        var _this = this;
        this.list.forEach(function (oneItem) {
            console.log((_this.list.indexOf(oneItem) + 1) + oneItem);
        });
    };
    toDoList.prototype.deleteTask = function (task) {
        if (this.list.indexOf(task) > -1) {
            this.list.splice(task);
            console.log("=========== TASK Remove ===========");
            console.log('Task "' + task + '" remove from the list');
        }
    };
    return toDoList;
}());
var newlist = new toDoList('My to Do list');
console.log("Number of items:", newlist.addTask('This is our first task'));
console.log("Number of items:", newlist.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", newlist.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", newlist.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", newlist.addTask('Finish this iteration 3!! 🤓'));
newlist.listAllTasks();
console.log("Number of items:", newlist.deleteTask('Finish this iteration 1!! 🤓'));
newlist.listAllTasks();
