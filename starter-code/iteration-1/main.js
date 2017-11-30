var myTasks = [];
function addTask(task) {
    var result = myTasks.push(task);
    console.log("\n      =========== NEW TASK ===========\n      We have inserted the task: " + task + ".\n      And we have a total of this many tasks: " + result + ".\n      ");
}
function listAllTasks() {
    console.log(myTasks);
}
function deleteTask(task) {
    console.log("We just deleted a task");
    var index = myTasks.indexOf(task);
    myTasks.splice(index, 1);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
