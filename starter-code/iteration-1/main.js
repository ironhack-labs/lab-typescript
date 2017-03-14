var myArray = [];
function addTask(item) {
    myArray.push(item);
    console.log('=========== NEW TASK ===========');
    console.log("Task \"" + item + "\" inserted in the list");
    console.log('');
    return myArray.length;
}
function listAllTasks() {
    myArray.forEach(function (oneElem) {
        console.log(oneElem);
    });
}
function deleteTask(task) {
    console.log('');
    var index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log('=========== TASK REMOVED ===========');
        console.log("Task \"" + task + "\" removed from the list");
        console.log('');
    }
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
