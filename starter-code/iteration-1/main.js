var myArray = [];
function addTask(string) {
    myArray.push(string);
}
function listAllTasks() {
    for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
        var string = myArray_1[_i];
        console.log(string);
    }
}
function deleteTask(string) {
    var remove = myArray.indexOf(string);
    myArray.splice(remove, 1);
}
console.log(myArray);
console.log("Number of items: " + myArray.length, addTask('This is our first task'));
console.log("Number of items: " + myArray.length, addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items: " + myArray.length, addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items: " + myArray.length, addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items: " + myArray.length, addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items: " + myArray.length, deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
