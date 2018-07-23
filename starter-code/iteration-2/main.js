// Add the reference to the "TodoInterface"
var Todo = /** @class */ (function () {
    function Todo(newArr) {
        if (newArr === void 0) { newArr = []; }
        this.newArr = newArr;
    }
    Todo.prototype.addTask = function (newTask) {
        this.newArr.push(newTask);
        console.log("Nueva tarea " + newTask);
        console.log(this.newArr.length);
        return this.newArr.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.newArr.forEach(function (e) {
            return console.log(e);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        this.newArr.splice(this.newArr.indexOf(task), 1);
        console.log("Eliminada tarea " + task);
        console.log(this.newArr.length);
        return this.newArr.length;
    };
    return Todo;
}());
var myTodos1 = new Todo();
console.log("Number of items:", myTodos1.addTask("This is our first task"));
console.log("Number of items:", myTodos1.addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", myTodos1.addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos1.addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", myTodos1.addTask("Finish this iteration 3!! 🤓"));
myTodos1.listAllTasks();
console.log("Number of items:", myTodos1.deleteTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos1.deleteTask("Finish this iteration 2!! 🤓"));
myTodos1.listAllTasks();
