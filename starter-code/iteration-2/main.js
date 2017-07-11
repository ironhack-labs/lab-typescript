var Todo = (function () {
    function Todo() {
        this.listOfTasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.listOfTasks.push(task);
        return this.listOfTasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.listOfTasks.forEach(function (oneTask) {
            console.log(oneTask);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var indexOfString = this.listOfTasks.indexOf(task);
        if (indexOfString) {
            this.listOfTasks.splice(indexOfString, 1);
            console.log(task + ' has been deleted');
        }
        else {
            console.log("Task does not exist");
        }
        return this.listOfTasks.length;
    };
    return Todo;
}());
var myTodos1 = new Todo();
console.log("Number of items:", myTodos1.addTask('This is our first task'));
console.log("Number of items:", myTodos1.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 3!! 🤓'));
myTodos1.listAllTasks();
console.log("Number of items:", myTodos1.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos1.deleteTask('Finish this iteration 2!! 🤓'));
myTodos1.listAllTasks();
