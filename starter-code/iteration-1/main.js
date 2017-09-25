let testArray = [];
let number = 0;
function addTask(task) {
    testArray.push(task);
    number++;
    console.log(task + "was added");
}
function listAllTasks(task) {
    for (var i = 0; i < testArray.length; i++) {
        console.log(testArray[i]);
    }
}
function deleteTask(task) {
    var index = testArray.indexOf(task, 0);
    if (index > -1) {
        testArray.splice(index, 1);
    }
}
console.log("Number of items:" + number, addTask('This is our first task'));
console.log("Number of items:" + number, addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:" + number, addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:" + number, addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:" + number, addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
