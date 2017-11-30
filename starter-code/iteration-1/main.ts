// Iteration 1
// 1. Create an array of strings
let stringArray: string[] = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask (task:string): number {
  stringArray.push(task);
  console.log(`${task} inserted into list of tasks`);
  console.log('Number of tasks: ', stringArray.length);
  return stringArray.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(): void{
  stringArray.forEach(task => {
    console.log(task);
  });
  return;
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task: string): number{
  const taskIndex: number = stringArray.indexOf(task);
  stringArray.splice(taskIndex, 1);
  console.log(`Deleted ${task} at position ${taskIndex} in our task list.`);
  return stringArray.length;
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
