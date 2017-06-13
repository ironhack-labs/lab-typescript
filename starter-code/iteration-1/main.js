var tasks = [];
function addTask(task) {
    console.log('**added a task**');
    this.tasks.push(task);
    return (task.length);
}
function listAllTasks() {
    var _this = this;
    console.log('*** All Tasks ***');
    this.tasks.forEach(function (thisTask) {
        console.log(thisTask);
        return _this.tasks.length;
    });
}
var deleteTask = function (task) {
    var index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    return this.tasks.length;
};
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
