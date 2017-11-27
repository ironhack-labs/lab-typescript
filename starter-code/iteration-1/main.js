// Iteration 1
// 1. Create an array of strings
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
var taskList = [];
function addTask(task) {
    taskList.push(task);
    console.log("Is inside!!");
    console.log(taskList.length);
    return taskList.length;
}
function listAllTasks() {
    for (var i = 0; i < this.taskList.length; i++) {
        console.log(this.taskList[i]);
    }
}
function deleteTask(task) {
    taskList.pop();
    console.log(taskList.length);
    console.log("It's deleted");
    return taskList.length;
}
// class List {
//     taskList: Array<String>;
//     constructor(taskList: Array<String>) { }
//     addTask(task) {
//         this.taskList.push(task);
//         console.log("Is inside!!");
//         console.log(this.taskList.length);
//         return this.taskList.length;
//     }
//     listAllTasks() {
//         for (var i = 0; i < this.taskList.length; i++) {
//             console.log(this.taskList[i]);
//         }
//     }
//     deleteTask(task){
//         this.taskList.pop();
//         console.log(this.taskList.length);
//         console.log(`It's deleted`);
//         return this.taskList.length;
//     }
// }
// 3. Create a function to list all tasks, it must show in the console de task.
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
