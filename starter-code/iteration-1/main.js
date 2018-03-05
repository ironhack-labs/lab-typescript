var myArrayOfStrings = ['a', 'b', 'c'];
function addTask(task) {
    myArrayOfStrings.push(task);
    console.log('message inserted');
    console.log(myArrayOfStrings.length);
    return myArrayOfStrings.length;
}
;
function listAllTasks() {
    myArrayOfStrings.forEach(function (list) {
        console.log(list);
    });
}
function deleteTask(task) {
    var index = myArrayOfStrings.indexOf(task);
    myArrayOfStrings.splice(index, 1);
    console.log(myArrayOfStrings.length);
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
