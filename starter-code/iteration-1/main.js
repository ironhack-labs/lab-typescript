var myTasks = [];
console.log("Number of items:", addTask('This is our first task'));
function addTask(task) {
    myTasks.push(task);
    return myTasks;
}
addTask("Some shit");
addTask("More shit");
addTask("Even more shit");
console.log("Number of items: " + myTasks.length + ", addTask('Eat pizza \uD83C\uDF55 yummy!!!')");
function listAllTasks() {
    myTasks.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    myTasks.splice(myTasks.indexOf(task), 1);
}
deleteTask("Some shit");
listAllTasks();
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
