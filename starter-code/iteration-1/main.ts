// Iteration 1
// 1. Create an array of strings
const arr = [];


// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
addTask function(task:string) {
  arr.push(task);
  console.log(`Task ${task} inserted into the list`);
  console.log(`Number of items ${arr.length}`)
  return arr.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
listAllTasks function(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
// 4. Create a function to delete a task, you must find the task inside the array and delete it.

deleteTask function(task: string) {
  arr.pop();
  console.log(`Task ${task} removed from the list`);
  return arr.length;
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





