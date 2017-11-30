var TodoItem = (function () {
    function TodoItem(taskTitle, taskStatus, updatedAt) {
        this.taskTitle = taskTitle;
        this.taskStatus = taskStatus;
        this.updatedAt = updatedAt;
    }
    TodoItem.prototype.toggleStatus = function (status) {
        if (status === true) {
            status = false;
        }
        else if (status === false) {
            status = true;
            return status;
        }
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(myTasks) {
    }
    TodoList.prototype.addTask = function (task) {
        myTasks.push(task);
        console.log("=========== NEW TASK ===========");
        console.log("Task" + task + "inserted in the list");
        return myTasks.length;
    };
    TodoList.prototype.listAllTasks = function (arrayOfTasks) {
        console.log("These are our tasks: ");
        arrayOfTasks.forEach(function (oneTask) {
            console.log(oneTask.taskTitle);
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
