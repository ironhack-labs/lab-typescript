var myArray = [];
function addTask(task) {
    myArray.push(task);
    return myArray.length;
}
function allTasks() {
    for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
        var all = myArray_1[_i];
        console.log(all);
    }
}
function deleteTask(task) {
    var index = myArray.indexOf(task);
    myArray.splice(index, 1);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
allTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
allTasks();
