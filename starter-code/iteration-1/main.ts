// Iteration 1

// 1. Create an array of strings
let tasks: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task: string){
  // It adds the task to the array.
  tasks.push(task);
  // It prints a message indicating the insertion.
  console.log('===== New Task ====+');
  console.log(`Task "${task}" inserted into the list`);
  // It returns the number of elements in the list and prints that number in the console as well.
  return tasks.length
};

// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(){
  console.log('_______Task List_______')
  tasks.forEach((task) => {
    console.log(`${task}`)
  });
};
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task: string){
  tasks.splice(tasks.indexOf(task), 1);
  console.log('====== TASK REMOVED ======');
  console.log(`Task "${task}" removed from the list`);
  return tasks.length;
};

// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
