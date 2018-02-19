var tasks = ['This is our first task', 'Eat pizza 🍕 yummy!!!', 'Finish this iteration 1!! 🤓'];
var Todo = (function () {
    function Todo(tasks) {
        this.tasks = tasks;
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log('=========== NEW TASK ===========');
        console.log('Task "' + task + '" inserted in the list');
        console.log('Number of items: ' + this.tasks.length);
        return this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (element) {
            console.log(element);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        console.log('=========== TASK REMOVED ===========');
        console.log('Task "' + task + '" removed from the list');
        console.log('Number of items: ' + this.tasks.length);
        return this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo(tasks);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
