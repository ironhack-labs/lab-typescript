var Task = (function () {
    function Task() {
        this.taskArray = ['Complete assignment', 'Eat lunch'];
    }
    Task.prototype.addTask = function (newTask) {
        taskArray.push(newTask);
        return taskArray.length,
            console.log("============= NEW TASK =============="),
            console.log("Task: " + newTask + "inserted in the list"),
            console.log("Number of items: " + taskArray.length);
    };
    Task.prototype.listAllTasks = function () {
        taskArray.forEach(function (eachTask) {
            console.log(eachTask);
        });
    };
    return Task;
}());
