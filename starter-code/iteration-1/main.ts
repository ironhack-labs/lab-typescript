// Iteration 1
// 1. Create an array of strings
let taskArray: string[] = [ 'Complete assignment', 'Eat lunch' ];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

function addTask(newTask: string) {
  taskArray.push(newTask);

  console.log("============= NEW TASK ==============");
  console.log("Task: " + newTask + "inserted in the list");
  console.log("Number of items: " + taskArray.length);
}

// 3. Create a function to list all tasks, it must show in the console de task.

function listAllTasks(array) {
  console.log("Printing task list");

  taskArray.forEach((eachTask) => {
  console.log(eachTask);
  });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask(task: string) {
  var eraseTask = taskArray.indexOf(task);

  console.log("=============== TASK REMOVED ================");
  console.log("Deleting task " + task);
  taskArray.splice(eraseTask, 1);
  console.log(taskArray.length);
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
