let myList = [];
function addTask(task) {
    myList.push(task);
    console.log('Task ' + task + ' added');
    return myList.length;
}
;
function listAllTasks() {
    for (let task of myList) {
        console.log(task);
    }
}
;
function deleteTask(task) {
    myList.splice(myList.indexOf(task), 1);
    return myList.length;
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
