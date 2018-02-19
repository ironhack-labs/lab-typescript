// Iteration 1
// 1. Create an array of strings
var array = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task) {
    array.push(task);
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    document.body.innerHTML += "<ul>";
    array.forEach(function (t) {
        document.body.innerHTML += "<li>" + t + "</li>";
    });
    document.body.innerHTML += "</ul>";
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    array.splice(array.indexOf(task), 1);
}
// Execution
console.log("Number of items: " + array.length, addTask('This is our first task'));
console.log("Number of items: " + array.length, addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items: " + array.length, addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items: " + array.length, addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items: " + array.length, addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:" + array.length, deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
// Add the reference to the interface
// Create class TodoItem that implements the corresponding interface
// Create class TodoList that implements the corresponding interface
// Execution
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
// Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
// - A boolean to mark if it's done.
// - A property updatedAt, obiously is a date.
// - Method for toogle if it's done or not, doesn't return anything.
// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.
//# sourceMappingURL=main.js.map