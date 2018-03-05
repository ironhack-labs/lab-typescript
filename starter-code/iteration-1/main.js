var myToDo = [];
function addTask(task) {
    myToDo.push(task);
    console.log(myToDo.length);
}
function listAllTasks() {
    myToDo.forEach(function (item) {
        console.log(item);
    });
}
function deleteTask(item) {
    var ind = myToDo.indexOf(item);
    myToDo.splice(ind, 1);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
