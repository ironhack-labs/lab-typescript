var myTask = [];
function addTask(task) {
    myTask.push(task);
}
function listAllTasks() {
    myTask.forEach(function (task) {
        console.log("" + task);
    });
}
function deleteTask(task) {
    console.log('--------------------');
    var index = myTask.indexOf(task);
    myTask.splice(index, 1);
    console.log(task + ' has been deleted');
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!!'));
console.log("Number of items:", addTask('Finish this iteration 2!!'));
console.log("Number of items:", addTask('Finish this iteration 3!!'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!!'));
console.log('=====AFTER DELETION========');
listAllTasks();
