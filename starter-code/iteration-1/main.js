var array = [];
function addTask(task) {
    array.push(task);
}
function listAllTasks() {
    document.body.innerHTML += "<ul>";
    array.forEach(function (t) {
        document.body.innerHTML += "<li>" + t + "</li>";
    });
    document.body.innerHTML += "</ul>";
}
function deleteTask(task) {
    array.splice(array.indexOf(task), 1);
}
console.log("Number of items: " + array.length, addTask('This is our first task'));
console.log("Number of items: " + array.length, addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items: " + array.length, addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items: " + array.length, addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items: " + array.length, addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:" + array.length, deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
