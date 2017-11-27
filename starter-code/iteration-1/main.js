var myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log("task has been added");
    return myArray.length;
}
function listAllTasks() {
    myArray.forEach(function (e) {
        console.log(e);
    });
}
;
function deleteTask(element, task) {
    myArray.splice(myArray.indexOf(task), 1);
    console.log("task has been deleted, the current number is" + myArray.length);
    return myArray.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
