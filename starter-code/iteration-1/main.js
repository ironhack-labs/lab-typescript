let myArray = ["comprar huevos", "sacar al perro", "llevar a Luis a clase de piano"];
function addTask(task) {
    myArray.push(task);
    console.log(task + "inserted in the list");
    console.log("Number of items " + myArray.length);
    return myArray.length;
}
;
function listAllTasks() {
    for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
        console.log("Number of items " + myArray.length);
    }
}
;
function deleteTask(task) {
    myArray.splice(myArray.indexOf(task), 1);
    console.log(task + "remove from the list");
    console.log("Number of items " + myArray.length);
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
