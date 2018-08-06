// Iteration 1
// 1. Create an array of strings

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

// 3. Create a function to list all tasks, it must show in the console de task.

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

// Execution
let myArray: Array<string> = [];

function addTask(target: string) {
  myArray.push(target);
  console.log(`
  =========== NEW TASK ===========
  Task "${target}" inserted in the list`);
  console.log(`Number of items: ${myArray.length}`);
}

function listAllTasks() {
  console.log(...myArray);
} 

function deleteTask(target:string) {
  let tempIndex: number = myArray.indexOf(target);
  myArray.splice(tempIndex,1);
  console.log(`
  =========== TASK REMOVED ===========
  Task "${target}" removed from the list`);
  console.log(`Number of items: ${myArray.length}`);
}
addTask('This is our first task');
addTask('Eat pizza 🍕 yummy!!!');
addTask('Finish this iteration 1!! 🤓');
addTask('Finish this iteration 2!! 🤓');
addTask('Finish this iteration 3!! 🤓');
listAllTasks();
 deleteTask('Finish this iteration 1!! 🤓');
listAllTasks();
