var tasks = [];
var addTask = function (task) {
    this.tasks.push(task);
    console.log("=========== NEW INSERTION ===========");
    console.log("Task \"" + task + "\" inserted in the list");
    return this.tasks.length;
};
var listAllTasks = function () {
    console.log("========TASKS==========");
    this.tasks.forEach(function (task, index) {
        console.log(task);
    });
};
var deleteTask = function (task) {
    var index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    console.log("==========NEW DELETION===========");
    console.log("Task \"" + task + "\" removed from the list");
    return this.tasks.lenght;
};
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
