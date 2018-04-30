// Iteration 1
// 1. Create an array of strings
let todoTasks: Array<string> = [];


// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

function addTask(task: string): number {
  todoTasks.push(task)
  console.log("Task" + task + " inserted in the list")
  console.log("Number of items: " + todoTasks.length)
  return todoTasks.length;
  }
  
// 3. Create a function to list all tasks, it must show in the console de task.

function listTask(value,index, ar){
  console.log("task: " + value);
}
todoTasks.forEach(listTask)
// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask(task: string){
  let quitalo = "task";
  for (var i= todoTasks.length -1; i>=0;i--){
    if (todoTasks[i] === quitalo){
      todoTasks.splice(i,1)
    }
  }
  console.log("Task" + task + " removed from the list")
  console.log("Number of items: " + todoTasks.length);
  return todoTasks.length;
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
