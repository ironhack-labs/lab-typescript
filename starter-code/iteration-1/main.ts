// Iteration 1
// 1. Create an array of strings
let tasks: Array<string> =[];

//let greeter = new Greeter("Hello, world!");
let addTask = (task: string) => {
  tasks.push(task);
  console.log("=========== NEW TASK ===========");
  console.log(`Task ${task} inserted in the list`);
  return tasks.length;
}

let listAllTasks = () => {
  tasks.forEach(element => {console.log(element)});
}

let deleteTask = (task: string) => {
if (tasks.indexOf(task) != -1) {
  tasks.splice(tasks.indexOf(task), 1); 
  console.log("=========== TASK REMOVED ===========");
  console.log(`Task ${task} removed from the list`);
 }

 return tasks.length;
} 

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

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
