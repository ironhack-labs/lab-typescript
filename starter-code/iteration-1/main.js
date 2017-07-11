var myList = [];
function addTask(task) {
    return myList.push(task);
}
function listAllTasks() {
    return myList.forEach(function (oneTask) {
        console.log(oneTask);
    });
}
function deleteTask(task) {
    myList.forEach(function (oneTask) {
        myList.indexOf(oneTask);
        if (myList.indexOf(oneTask) === myList.indexOf(task)) {
            myList.splice(myList.indexOf(task), 1);
            console.log('Task deleted: ' + task + 'great.');
        }
    });
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
