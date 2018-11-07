// Iteration 1
// 1. Create an array of strings
let tasks : Array<string> = ['']

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task:string) {
  tasks.push(task)
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
  tasks.forEach((item) =>{
    console.log(item)
  })
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task : string) {
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (tasks[i] === task) tasks.splice(i, 1);
  }
  console.log('Deleted ' + task)
  return tasks.length
}
// Execution
console.log("Number of items:" + tasks.length, addTask('This is our first task'));
console.log("Number of items:" + tasks.length, addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:" + tasks.length, addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:" + tasks.length, addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:" + tasks.length, addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:" + tasks.length, deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
