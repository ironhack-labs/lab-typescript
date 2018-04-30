// Iteration 1

// 1. Create an array of strings
let list = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task:string) {
  list.push(task)
  console.log(`${task} was added to the list of tasks.` )
  console.log(`Lenght of the list is: ${list.length}`)
  return list.length;  
}
// 3. Create a function to list all tasks, it must show in the console de task.

function listAllTasks() {
  for (var i = 0; i < list.length; i++){
    console.log(`Task : ${this.list[i]}`);
  }
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task:string) {
  let index = list.indexOf(task);
  list.splice(index, 1);
  console.log(`${task} was deleted from the list of task.`)
  console.log(`Lenght of the list is: ${list.length}`)
  return list.length
}

// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
