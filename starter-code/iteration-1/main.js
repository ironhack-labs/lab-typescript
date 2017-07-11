var todoList = [];
function addTask(task) {
    todoList.push(task);
    console.log('Task inserted');
    return todoList.length;
}
;
function listAllTasks() {
    todoList.forEach(function (task) {
        console.log(task);
    });
}
;
function deleteTask(task) {
    var i = todoList.indexOf('Finish this iteration 1!! 🤓');
    if (i != -1) {
        todoList.splice(i, 1);
    }
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
