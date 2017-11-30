var TodoList = (function () {
    function TodoList(myTasks) {
        this.myTasks = myTasks;
    }
    TodoList.prototype.addTask = function (task) {
        return myTasks.push(task);
    };
    TodoList.prototype.listAllTasks = function (arrayOfTasks) {
        console.log("These are our tasks: ");
        arrayOfTasks.forEach(function (oneTask) {
            console.log(oneTask);
        });
    };
    TodoList.prototype.deleteTask = function (taskToDelete) {
        var itemIndex = myTasks.indexOf(taskToDelete);
        console.log(itemIndex);
        myTasks.splice(itemIndex, 1);
        console.log(myTasks);
    };
    return TodoList;
}());
var marisasList = new TodoList([]);
console.log(marisasList);
