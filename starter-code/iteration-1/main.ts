// Iteration 1
// 1. Create an array of strings
let toDoArray: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

function addTask (task: string) {
  toDoArray.push(task);
  console.log("=========== NEW TASK ===========");
  console.log("Task "+ task +" inserted in the list");
  return toDoArray.length;
}

// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks () {
  console.log("=========== LIST OF TASKS ===========");
  toDoArray.forEach(function(task: string) {
    console.log("- ", task);
  })
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask (task: string) {
  let taskIndex = toDoArray.indexOf(task);
  toDoArray.splice(taskIndex,1);
  console.log("=========== TASK REMOVED ===========");
  console.log("Task "+ task +" removed from the list");
}


// Execution
console.log("Number of items: ", addTask('This is our first task'));
console.log("Number of items: ", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items: ", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items: ", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items: ", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
