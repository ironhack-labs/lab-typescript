var Todo = (function () {
    function Todo(taskList) {
        if (taskList === void 0) { taskList = []; }
        this.taskList = taskList;
    }
    Todo.prototype.addTask = function (task) {
        this.taskList.push(task);
        console.log(task + " added");
        return this.taskList.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log(this.taskList);
    };
    Todo.prototype.deleteTask = function (taskToDelete) {
        var _this = this;
        this.taskList.forEach(function (oneTask) {
            if (oneTask === taskToDelete) {
                var indexToDelete = _this.taskList.indexOf(oneTask);
                _this.taskList.splice(indexToDelete, 1);
                console.log(oneTask + " removed");
            }
        });
        return this.taskList.length;
    };
    return Todo;
}());
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
