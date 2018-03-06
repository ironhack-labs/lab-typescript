var myArray = [];
function addTask(phrase) {
    return myArray.push(phrase);
}
function listAllTasks() {
    myArray.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    myArray.splice(myArray.indexOf(task), 1);
    return myArray.length;
}
console.log("Number of items: 1", addTask('This is our first task'));
console.log("Number of items: 2", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items: 3", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items: 4", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items: 5", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items: 6", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
