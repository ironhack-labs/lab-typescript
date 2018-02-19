var a;
function addTask(task) {
    console.log("SE HA AÑADIDO LA SIGUIENTE TAREA:", task);
    a.push(task);
    return a.length;
}
function listAllTask() {
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}
function deleteTask(task) {
    var index = a.indexOf(task);
    a.splice(index, 1);
    return a.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
