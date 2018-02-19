// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(myArray) {
        this.myArray = myArray;
    }
    return Todo;
}());
function addTask(newTask) {
    this.myArray.push(newTask);
    console.log(newTask + ' New length of array is: ' + myArray.length);
    return this.myArray.length;
}
function listAllTasks() {
    this.myArray.forEach(function (element) {
        console.log(element);
    });
}
function deleteTask(task) {
    var index = this.myArray.indexOf[task];
    this.myArray.splice(index, 1);
    return this.myArray.length;
}
// Execution
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
