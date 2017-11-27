// Iteration 1
// 1. Create an array of strings

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

// 3. Create a function to list all tasks, it must show in the console de task.

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

// Execution
let taskArray : Array<String> =[];
let addTask = function(task:String, taskArray: Array<String>): Number
  {
    console.log("Task :"+ task + "inserted in the list"); 
    taskArray.push(task);
    return taskArray.length;
  }

console.log("Number of items:", addTask('This is our first task',taskArray));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!',taskArray));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓',taskArray));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓',taskArray));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓',taskArray));
//listAllTasks();
//console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
//listAllTasks();
