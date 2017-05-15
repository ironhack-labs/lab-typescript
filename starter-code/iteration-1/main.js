var myArray = ['a', 'b', 'c'];
function addTask(task) {
    myArray.push(task);
    console.log("Colocamos el elemento " + task);
    return myArray.length;
}
function listAllTasks() {
    for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
        var counter = myArray_1[_i];
        console.log(counter);
    }
}
function deleteTask(task) {
    var i = myArray.indexOf(task);
    myArray.splice(i, 1);
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
