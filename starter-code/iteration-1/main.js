var myTasks = [];
function addTask(task) {
    myTasks.push(task);
    console.log(myTasks.length);
    return "<p>Tarea Anotada</p>" + myTasks.length;
}
;
var task = "Tarea 1";
document.body.innerHTML = addTask(task);
function listAllTasks() {
    myTasks.forEach(function (e) {
        console.log(e);
    });
}
;
function deleteTask(task) {
    var index = myTasks.indexOf(task);
    myTasks.splice(index);
    console.log(task);
    document.body.innerHTML = "<h1>Tarea Eliminada</h1>";
    console.log(addTask.length);
    return addTask.length;
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
