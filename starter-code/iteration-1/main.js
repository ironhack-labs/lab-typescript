var myArray = [];
function addTask(x) {
    myArray.push(x);
}
function listAllTasks() {
    for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
    ;
}
function deleteTask(x) {
    for (var i = 0; i < myArray.length; i++) {
        if (x === myArray[i]) {
            delete myArray[i];
        }
    }
    ;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
