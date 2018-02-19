// Iteration 1
// 1. Create an array of strings
let tasks: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
const addTask = (task: string) => {
  tasks.push(task);
  console.log(`=========== NEW TASK ===========
  Task "${task}" inserted in the list`);
  return tasks.length;
}

// 3. Create a function to list all tasks, it must show in the console de task.
const listAllTasks = () => tasks.forEach(task  => console.log(task));

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
const deleteTask = (task) => tasks.splice(tasks.indexOf(task), 1);

// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();