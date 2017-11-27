var Todo = (function () {
    function Todo() {
        this.list = [];
    }
    Todo.prototype.addTask = function (task) {
        this.list.push(task);
        console.log("=========== NEW TASK ===========");
        console.log("Task" + task + "inserted in the list");
        return this.list.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.list.forEach(function (e) {
            console.log(e);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        this.list.splice(this.list.indexOf(task), 1);
        console.log("=========== TASK REMOVED ===========");
        console.log("Task" + task + "removed from the list");
        return this.list.length;
    };
    return Todo;
}());
myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
