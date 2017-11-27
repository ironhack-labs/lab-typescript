// Iteration 1
// 1. Create an array of strings
let myTasks = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
let addTask = function(task: string): number {
  console.log("Add element to myTasks array");
  myTasks.push(task);
  return myTasks.length;
};

// 3. Create a function to list all tasks, it must show in the console de task.

let listAllTasks = function(myArray: Array<String>): void {
  for (let i = 0; i <= myArray.length; i++) {
    console.log(myArray[i]);
  }
};

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

let deleteTask = function(deletedTasks: string): number {
  let index = myTasks.indexOf(deletedTasks);
  console.log("task " + myTasks[index] + " has been deleted.");
  myTasks.splice(index, 1);
  return myTasks.length;
};

// Execution
console.log("Number of items:", addTask("This is our first task"));
console.log("Number of items:", addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 3!! 🤓"));
listAllTasks(myTasks);
console.log("Number of items:", deleteTask("Finish this iteration 1!! 🤓"));
listAllTasks(myTasks);
