var myArray = [];
function addTask(word) {
    myArray.push(word);
    console.log(word);
    return myArray.length;
}
function listAllTasks() {
    myArray.forEach(function (word) {
        console.log(word);
    });
}
function deleteTask(word) {
    myArray.splice(myArray.indexOf(word), 1);
    console.log(word);
    return myArray.length;
}
;
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
