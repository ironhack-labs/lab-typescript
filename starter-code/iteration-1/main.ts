// Iteration 1
// 1. Create an array of strings
let myArray: Array<string> = []
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(string){
    myArray.push(string)
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(){
  for (let string of myArray){
    console.log(string)
  }
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(string){
    var remove = myArray.indexOf(string);
    myArray.splice(remove, 1)
}

// Execution
console.log(myArray)
console.log("Number of items: " + myArray.length, addTask('This is our first task'));
console.log("Number of items: " + myArray.length, addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items: " +myArray.length, addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items: " + myArray.length, addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items: " +myArray.length, addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items: " +myArray.length, deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
