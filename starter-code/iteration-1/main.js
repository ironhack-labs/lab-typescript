var toDo = (function () {
    function toDo(toDoList) {
        if (toDoList === void 0) { toDoList = []; }
        this.toDoList = toDoList;
    }
    toDo.prototype.addTask = function (task) {
        this.toDoList.push(task);
        console.log("Task " + task + " inserted in the list");
        return this.toDoList.length;
    };
    toDo.prototype.listAllTasks = function () {
        this.toDoList.forEach(function (task, index) {
            console.log("task " + (index + 1) + ": " + task);
        });
    };
    toDo.prototype.deleteTask = function (task) {
        var index = this.toDoList.indexOf(task);
        if (index > -1) {
            this.toDoList.slice(index, 1);
            console.log("Task " + task + " deleted from the list");
            return this.toDoList.length;
        }
        console.log("The task " + task + " isn't in the list");
        return this.toDoList.length;
    };
    return toDo;
}());
var listOjbect = new toDo();
console.log("Number of items:", listOjbect.addTask('This is our first task'));
console.log("Number of items:", listOjbect.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", listOjbect.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", listOjbect.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", listOjbect.addTask('Finish this iteration 3!! 🤓'));
listOjbect.listAllTasks();
console.log("Number of items:", listOjbect.deleteTask('Finish this iteration 1!! 🤓'));
listOjbect.listAllTasks();
